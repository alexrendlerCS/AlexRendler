"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  X,
  Target,
  Code,
  BookOpen,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  projects,
  skills,
  goals,
  getNodeById,
  getConnectedNodes,
  calculateGoalProgress,
  getRecommendedNextSteps,
  type Project,
  type Skill,
  type Goal,
} from "@/lib/journey-data";

// Tree layout configuration
const TREE_CONFIG = {
  rootY: 60, // Goals at top - moved closer to top for better fit
  layerSpacing: 120, // Reduced spacing between layers to fit all 6 layers
  nodeSpacing: 150, // Horizontal spacing between nodes
  nodeRadius: 30, // Radius of circular nodes
  centerOffset: 400, // Center offset to prevent left cutoff
};

// Simple SVG-based tree component
const SimpleSkillTree = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Zoom and pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Calculate tree layout
  const treeData = useMemo(() => {
    const allNodes: Array<{
      id: string;
      type: "goal" | "skill" | "project";
      data: any;
      x: number;
      y: number;
    }> = [];
    const allConnections: Array<{
      from: string;
      to: string;
      color: string;
      width: number;
    }> = [];

    // Layer 1: Goals (top)
    goals.forEach((goal, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (goals.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: goal.id,
        type: "goal",
        data: goal,
        x,
        y: TREE_CONFIG.rootY,
      });
    });

    // Layer 2: Advanced Skills
    const advancedSkills = skills.filter(
      (s) => s.proficiency > 70 || s.status === "unlocked"
    );
    advancedSkills.forEach((skill, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (advancedSkills.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: skill.id,
        type: "skill",
        data: skill,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing,
      });
    });

    // Layer 3: Career Projects
    const careerProjects = projects.filter(
      (p) =>
        p.title.includes("RealtyEdge") ||
        p.title.includes("ClaimsConnect") ||
        p.title.includes("AIcademy") ||
        p.title.includes("SEO Insights") ||
        p.title.includes("TrainerDev") ||
        p.title.includes("Fitness Trainer Platform")
    );
    careerProjects.forEach((project, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (careerProjects.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: project.id,
        type: "project",
        data: project,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 2,
      });
    });

    // Layer 4: Intermediate Projects
    const intermediateProjects = projects.filter(
      (p) =>
        (p.title.includes("StatsX") ||
          p.title.includes("Nexus") ||
          p.title.includes("AI Resume Builder") ||
          p.title.includes("Stock Trading Bot")) &&
        !careerProjects.find((cp) => cp.id === p.id)
    );
    intermediateProjects.forEach((project, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (intermediateProjects.length - 1) / 2) *
          TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: project.id,
        type: "project",
        data: project,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 3,
      });
    });

    // Layer 5: Foundation Skills
    const foundationSkills = skills.filter(
      (s) => s.proficiency <= 70 || s.status === "partial"
    );
    foundationSkills.forEach((skill, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (foundationSkills.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: skill.id,
        type: "skill",
        data: skill,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 4,
      });
    });

    // Layer 6: Early Projects
    const earlyProjects = projects.filter(
      (p) =>
        (p.title.includes("Bells and Bones") ||
          p.title.includes("CoreVybe") ||
          p.title.includes("Budget Tracker")) &&
        !careerProjects.find((cp) => cp.id === p.id) &&
        !intermediateProjects.find((ip) => ip.id === p.id)
    );
    earlyProjects.forEach((project, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (earlyProjects.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: project.id,
        type: "project",
        data: project,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 5,
      });
    });

    // Create connections manually
    // 1. Early projects to foundation skills
    earlyProjects.forEach((project) => {
      project.skillsGained.forEach((skillId) => {
        const skill = foundationSkills.find((s) => s.id === skillId);
        if (skill) {
          allConnections.push({
            from: project.id,
            to: skillId,
            color: "#3b82f6",
            width: 3,
          });
        }
      });
    });

    // 2. Foundation skills to intermediate projects
    foundationSkills.forEach((skill) => {
      intermediateProjects.forEach((project) => {
        if (project.skillsGained.includes(skill.id)) {
          allConnections.push({
            from: skill.id,
            to: project.id,
            color: "#10b981",
            width: 3,
          });
        }
      });
    });

    // 3. Intermediate projects to advanced skills
    intermediateProjects.forEach((project) => {
      project.skillsGained.forEach((skillId) => {
        const skill = advancedSkills.find((s) => s.id === skillId);
        if (skill) {
          allConnections.push({
            from: project.id,
            to: skillId,
            color: "#3b82f6",
            width: 3,
          });
        }
      });
    });

    // 4. Career projects to advanced skills
    careerProjects.forEach((project) => {
      project.skillsGained.forEach((skillId) => {
        const skill = advancedSkills.find((s) => s.id === skillId);
        if (skill) {
          allConnections.push({
            from: project.id,
            to: skillId,
            color: "#8b5cf6",
            width: 4,
          });
        }
      });
    });

    // 5. Advanced skills to goals
    advancedSkills.forEach((skill) => {
      Object.keys(skill.weightByGoal).forEach((goalId) => {
        const goal = goals.find((g) => g.id === goalId);
        if (goal) {
          allConnections.push({
            from: skill.id,
            to: goalId,
            color: "#f59e0b",
            width: 4,
          });
        }
      });
    });

    return { nodes: allNodes, connections: allConnections };
  }, []);

  // Filter nodes based on search
  const filteredNodes = useMemo(() => {
    return treeData.nodes.filter((node) => {
      if (searchTerm === "") return true;
      const data = node.data;
      const titleMatch = data.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Handle different data types
      if (node.type === "project") {
        const projectData = data as Project;
        return (
          titleMatch ||
          projectData.summary?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (node.type === "skill") {
        const skillData = data as Skill;
        return (
          titleMatch ||
          skillData.description
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      } else if (node.type === "goal") {
        const goalData = data as Goal;
        return (
          titleMatch ||
          goalData.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return titleMatch;
    });
  }, [treeData.nodes, searchTerm]);

  // Filter connections to only show those between visible nodes
  const filteredConnections = useMemo(() => {
    const visibleNodeIds = new Set(filteredNodes.map((n) => n.id));
    return treeData.connections.filter(
      (conn) => visibleNodeIds.has(conn.from) && visibleNodeIds.has(conn.to)
    );
  }, [treeData.connections, filteredNodes]);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const clearSelection = () => setSelectedNode(null);

  // Zoom functions
  const zoomIn = () => setZoom((prev) => Math.min(prev * 1.2, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev / 1.2, 0.3));
  const resetZoom = () => setZoom(1);

  // Pan functions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      // Left mouse button only
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoom(1);
    // Center the tree in the viewport
    // Our viewBox is "-200 0 1200 700" and tree center is around x=400, y=350
    setPan({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.3, Math.min(3, zoom * delta));

    // Get the container dimensions and mouse position
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the mouse position relative to the current pan and zoom
    const worldMouseX = (mouseX - pan.x) / zoom;
    const worldMouseY = (mouseY - pan.y) / zoom;

    // Calculate new pan to keep the mouse position fixed during zoom
    const newPanX = mouseX - worldMouseX * newZoom;
    const newPanY = mouseY - worldMouseY * newZoom;

    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                🌳 My Journey - Skill Tree
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Explore my path from early projects to advanced skills to career
                goals
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-700 rounded-lg p-1">
                <Button
                  onClick={zoomOut}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <span className="text-lg font-bold">−</span>
                </Button>
                <Button
                  onClick={resetZoom}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <span className="text-xs">{Math.round(zoom * 100)}%</span>
                </Button>
                <Button
                  onClick={zoomIn}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <span className="text-lg font-bold">+</span>
                </Button>
              </div>

              <Button onClick={resetView} variant="outline" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Reset View
              </Button>

              <Button onClick={clearSelection} variant="outline" size="sm">
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search projects, skills, or goals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-200px)]">
        {/* Skill Tree */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className="w-full h-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            <svg
              width="100%"
              height="100%"
              className="min-w-full min-h-full"
              style={{ background: "transparent" }}
              viewBox="-200 0 1200 700"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Apply zoom and pan transformations */}
              <g
                transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}
                transform-origin="center"
              >
                {/* Draw connections first (behind nodes) */}
                {filteredConnections.map((conn, index) => {
                  const fromNode = filteredNodes.find(
                    (n) => n.id === conn.from
                  );
                  const toNode = filteredNodes.find((n) => n.id === conn.to);

                  if (!fromNode || !toNode) return null;

                  return (
                    <line
                      key={`${conn.from}-${conn.to}-${index}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={conn.color}
                      strokeWidth={conn.width}
                      opacity={0.8}
                    />
                  );
                })}

                {/* Draw nodes on top */}
                {filteredNodes.map((node) => (
                  <g key={node.id}>
                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={TREE_CONFIG.nodeRadius}
                      fill={
                        node.type === "goal"
                          ? "#f59e0b"
                          : node.type === "skill"
                          ? "#10b981"
                          : "#3b82f6"
                      }
                      stroke={
                        node.type === "goal"
                          ? "#d97706"
                          : node.type === "skill"
                          ? "#059669"
                          : "#2563eb"
                      }
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleNodeClick(node.id)}
                    />

                    {/* Node icon */}
                    {node.type === "goal" && (
                      <Target
                        x={node.x - 12}
                        y={node.y - 12}
                        width="24"
                        height="24"
                        fill="white"
                      />
                    )}
                    {node.type === "skill" && (
                      <Code
                        x={node.x - 12}
                        y={node.y - 12}
                        width="24"
                        height="24"
                        fill="white"
                      />
                    )}
                    {node.type === "project" && (
                      <BookOpen
                        x={node.x - 12}
                        y={node.y - 12}
                        width="24"
                        height="24"
                        fill="white"
                      />
                    )}

                    {/* Node label */}
                    <text
                      x={node.x}
                      y={node.y + TREE_CONFIG.nodeRadius + 20}
                      textAnchor="middle"
                      className="text-xs font-medium fill-slate-700 dark:fill-slate-300"
                    >
                      {node.data.title.length > 20
                        ? node.data.title.substring(0, 20) + "..."
                        : node.data.title}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="w-96 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {getNodeById(selectedNode)?.title || "Unknown Node"}
                </h2>
                <Button onClick={clearSelection} variant="ghost" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400">
                {(() => {
                  const nodeData = getNodeById(selectedNode);
                  if (!nodeData) return "No description available.";

                  if (nodeData.type === "project") {
                    return nodeData.summary || "No summary available.";
                  } else if (nodeData.type === "skill") {
                    return nodeData.description || "No description available.";
                  } else if (nodeData.type === "goal") {
                    return nodeData.description || "No description available.";
                  }

                  return "No description available.";
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="absolute top-20 right-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">
          Tree Structure
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-slate-700 dark:text-slate-300">
              Goals (Top)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-slate-700 dark:text-slate-300">Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-slate-700 dark:text-slate-300">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSkillTree;
