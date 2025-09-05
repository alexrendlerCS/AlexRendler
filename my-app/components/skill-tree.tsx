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
  const [pan, setPan] = useState({ x: 0, y: -50 });
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

    // Layer 1: Career/Contract Work (Purple/Orange - top level)
    const careerProjects = projects.filter(
      (p) =>
        p.title.includes("Botanically Crafted SEO") ||
        p.title.includes("Realty Edge") ||
        p.title.includes("AIcademy")
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
        y: TREE_CONFIG.rootY,
      });
    });

    // Layer 2: Goals (career objectives)
    goals.forEach((goal, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (goals.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: goal.id,
        type: "goal",
        data: goal,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing,
      });
    });

    // Layer 3: Advanced Projects/Certificates (Purple - high-level achievements)
    const advancedProjects = projects.filter(
      (p) =>
        p.title.includes("Aicademy") ||
        p.title.includes("IBM AI Engineer Certificate") ||
        p.title.includes("ClaimsConnect") ||
        p.title.includes("Fitness Trainer Platform")
    );
    advancedProjects.forEach((project, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (advancedProjects.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: project.id,
        type: "project",
        data: project,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 2,
      });
    });

    // Layer 3 → Layer 4: Advanced projects to advanced skills
    // Aicademy → AI Engineer + Prompt Engineer + Advanced Skills
    advancedProjects.forEach((project) => {
      if (project.title.includes("Aicademy")) {
        allConnections.push(
          { from: project.id, to: "ai-engineer", color: "#1e40af", width: 3 },
          {
            from: project.id,
            to: "prompt-engineer",
            color: "#1e40af",
            width: 3,
          },
          {
            from: project.id,
            to: "prompt-engineering",
            color: "#10b981",
            width: 3,
          },
          { from: project.id, to: "nlp", color: "#10b981", width: 3 },
          {
            from: project.id,
            to: "api-integrations",
            color: "#10b981",
            width: 3,
          },
          { from: project.id, to: "supabase", color: "#10b981", width: 3 }
        );
      }
    });

    // Fitness Trainer Platform → Full-Stack Developer + SEO Engineer + Advanced Skills
    advancedProjects.forEach((project) => {
      if (project.title.includes("Fitness Trainer Platform")) {
        allConnections.push(
          {
            from: project.id,
            to: "fullstack-developer",
            color: "#1e40af",
            width: 3,
          },
          { from: project.id, to: "seo-engineer", color: "#1e40af", width: 3 },
          { from: project.id, to: "supabase", color: "#10b981", width: 3 },
          { from: project.id, to: "seo-analytics", color: "#10b981", width: 3 },
          { from: project.id, to: "stripe", color: "#10b981", width: 3 },
          {
            from: project.id,
            to: "api-integrations",
            color: "#10b981",
            width: 3,
          }
        );
      }
    });

    // ClaimsConnect → Full-Stack Developer + Sales Engineer + Advanced Skills
    advancedProjects.forEach((project) => {
      if (project.title.includes("ClaimsConnect")) {
        allConnections.push(
          {
            from: project.id,
            to: "fullstack-developer",
            color: "#1e40af",
            width: 3,
          },
          {
            from: project.id,
            to: "sales-engineer",
            color: "#1e40af",
            width: 3,
          },
          { from: project.id, to: "supabase", color: "#10b981", width: 3 },
          {
            from: project.id,
            to: "api-integrations",
            color: "#10b981",
            width: 3,
          },
          { from: project.id, to: "n8n-automation", color: "#10b981", width: 3 }
        );
      }
    });

    // IBM AI Engineer Certificate → AI Engineer + Prompt Engineer + ML Engineer + Advanced Skills
    advancedProjects.forEach((project) => {
      if (project.title.includes("IBM AI Engineer Certificate")) {
        allConnections.push(
          { from: project.id, to: "ai-engineer", color: "#1e40af", width: 3 },
          {
            from: project.id,
            to: "prompt-engineer",
            color: "#1e40af",
            width: 3,
          },
          { from: project.id, to: "ml-engineer", color: "#1e40af", width: 3 },
          { from: project.id, to: "nlp", color: "#10b981", width: 3 },
          {
            from: project.id,
            to: "prompt-engineering",
            color: "#10b981",
            width: 3,
          },
          { from: project.id, to: "ml-prediction", color: "#10b981", width: 3 },
          {
            from: project.id,
            to: "api-integrations",
            color: "#10b981",
            width: 3,
          }
        );
      }
    });

    // Layer 4: Advanced Skills (Green/Orange - high-level capabilities)
    const advancedSkills = skills.filter(
      (s) =>
        s.id === "prompt-engineering" ||
        s.id === "supabase" ||
        s.id === "stripe" ||
        s.id === "nlp" ||
        s.id === "ml-prediction" ||
        s.id === "ml-engineer" ||
        s.id === "seo-analytics" ||
        s.id === "n8n-automation" ||
        s.id === "fullstack" ||
        s.id === "ai-engineer" ||
        s.id === "data-engineering" ||
        s.id === "seo-engineer" ||
        s.id === "sales-engineer" ||
        s.id === "docker" ||
        s.id === "api-integrations"
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
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 3,
      });
    });

    // Layer 4: Intermediate Projects (Blue - projects that use core skills)
    const intermediateProjects = projects.filter(
      (p) =>
        p.title.includes("TrainerDev") ||
        p.title.includes("AI Resume Builder") ||
        p.title.includes("Automated Stock Trading Bot") ||
        p.title.includes("SEO Insights") ||
        p.title.includes("StatsX")
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
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 4,
      });
    });

    // Layer 5: Core Skills (Green - skills that projects build)
    const coreSkills = skills.filter(
      (s) =>
        s.id === "html-css" ||
        s.id === "responsive-ui" ||
        s.id === "seo-basics" ||
        s.id === "python" ||
        s.id === "data-viz" ||
        s.id === "auth" // We'll need to add this skill
    );
    coreSkills.forEach((skill, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (coreSkills.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: skill.id,
        type: "skill",
        data: skill,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 5,
      });
    });

    // Layer 6: Baseline Projects (Blue - starting point)
    const baselineProjects = projects.filter(
      (p) =>
        p.title.includes("Bells and Bones") ||
        p.title.includes("CoreVybe") ||
        p.title.includes("Budget Tracker")
    );
    baselineProjects.forEach((project, index) => {
      const x =
        TREE_CONFIG.centerOffset +
        (index - (baselineProjects.length - 1) / 2) * TREE_CONFIG.nodeSpacing;
      allNodes.push({
        id: project.id,
        type: "project",
        data: project,
        x,
        y: TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 6,
      });
    });

    // Create connections following the 6-layer structure
    // Layer 6 → Layer 5: Baseline projects to core skills
    baselineProjects.forEach((project) => {
      if (project.title.includes("Bells and Bones")) {
        allConnections.push(
          { from: project.id, to: "html-css", color: "#3b82f6", width: 3 },
          { from: project.id, to: "responsive-ui", color: "#3b82f6", width: 3 },
          { from: project.id, to: "seo-basics", color: "#3b82f6", width: 3 }
        );
      }
      if (project.title.includes("CoreVybe")) {
        allConnections.push(
          { from: project.id, to: "responsive-ui", color: "#3b82f6", width: 3 },
          { from: project.id, to: "seo-basics", color: "#3b82f6", width: 3 }
        );
      }
      if (project.title.includes("Budget Tracker")) {
        allConnections.push(
          { from: project.id, to: "python", color: "#3b82f6", width: 3 },
          { from: project.id, to: "data-viz", color: "#3b82f6", width: 3 },
          { from: project.id, to: "auth", color: "#3b82f6", width: 3 }
        );
      }
    });

    // Layer 5 → Layer 4: Core skills to intermediate projects
    // HTML/CSS + Responsive UI + SEO Fundamentals → TrainerDev
    intermediateProjects.forEach((project) => {
      if (project.title.includes("TrainerDev")) {
        allConnections.push(
          { from: "html-css", to: project.id, color: "#10b981", width: 3 },
          { from: "responsive-ui", to: project.id, color: "#10b981", width: 3 },
          { from: "seo-basics", to: project.id, color: "#10b981", width: 3 }
        );
      }
    });

    // Python Dev + Data Viz + Auth → AI Resume Builder + Automated Stock Trading Bot
    intermediateProjects.forEach((project) => {
      if (
        project.title.includes("AI Resume Builder") ||
        project.title.includes("Automated Stock Trading Bot")
      ) {
        allConnections.push(
          { from: "python", to: project.id, color: "#10b981", width: 3 },
          { from: "data-viz", to: project.id, color: "#10b981", width: 3 },
          { from: "auth", to: project.id, color: "#10b981", width: 3 }
        );
      }
    });

    // SEO Fundamentals → SEO Insights Project
    intermediateProjects.forEach((project) => {
      if (project.title.includes("SEO Insights")) {
        allConnections.push({
          from: "seo-basics",
          to: project.id,
          color: "#10b981",
          width: 3,
        });
      }
    });

    // Python Dev + Data Viz → StatsX (Sports Analyzer)
    intermediateProjects.forEach((project) => {
      if (project.title.includes("StatsX")) {
        allConnections.push(
          { from: "python", to: project.id, color: "#10b981", width: 3 },
          { from: "data-viz", to: project.id, color: "#10b981", width: 3 }
        );
      }
    });

    // StatsX → n8n Automation / Docker
    intermediateProjects.forEach((project) => {
      if (project.title.includes("StatsX")) {
        allConnections.push(
          {
            from: project.id,
            to: "n8n-automation",
            color: "#1e40af",
            width: 3,
          },
          { from: project.id, to: "docker", color: "#1e40af", width: 3 }
        );
      }
    });

    // Layer 4 → Layer 3: Intermediate projects to advanced skills
    // TrainerDev → Full-Stack Developer / Supabase / Stripe / API Integrations
    intermediateProjects.forEach((project) => {
      if (project.title.includes("TrainerDev")) {
        allConnections.push(
          { from: project.id, to: "fullstack", color: "#1e40af", width: 3 },
          { from: project.id, to: "supabase", color: "#1e40af", width: 3 },
          { from: project.id, to: "stripe", color: "#1e40af", width: 3 },
          {
            from: project.id,
            to: "api-integrations",
            color: "#1e40af",
            width: 3,
          }
        );
      }
    });

    // AI Resume Builder → Prompt Engineering / NLP (Layer 3 skills)
    intermediateProjects.forEach((project) => {
      if (project.title.includes("AI Resume Builder")) {
        allConnections.push(
          {
            from: project.id,
            to: "prompt-engineering",
            color: "#1e40af",
            width: 3,
          },
          { from: project.id, to: "nlp", color: "#1e40af", width: 3 }
        );
      }
    });

    // Automated Stock Bot + StatsX → Data Engineering / ML Prediction
    intermediateProjects.forEach((project) => {
      if (
        project.title.includes("Automated Stock Trading Bot") ||
        project.title.includes("StatsX")
      ) {
        allConnections.push(
          {
            from: project.id,
            to: "data-engineering",
            color: "#1e40af",
            width: 3,
          },
          {
            from: project.id,
            to: "ml-prediction",
            color: "#1e40af",
            width: 3,
          }
        );
      }
    });

    // SEO Insights Project → SEO Analytics (Layer 3 skill)
    intermediateProjects.forEach((project) => {
      if (project.title.includes("SEO Insights")) {
        allConnections.push({
          from: project.id,
          to: "seo-analytics",
          color: "#1e40af",
          width: 3,
        });
      }
    });

    // Layer 3 → Layer 2: Advanced skills to career/contract work
    // Full-Stack Developer → Freelance SaaS (TrainerDev)
    careerProjects.forEach((project) => {
      if (project.title.includes("TrainerDev")) {
        allConnections.push({
          from: "fullstack",
          to: project.id,
          color: "#8b5cf6",
          width: 4,
        });
      }
    });

    // SEO Engineer → Botanically Crafted SEO contract
    careerProjects.forEach((project) => {
      if (project.title.includes("Botanically Crafted SEO")) {
        allConnections.push({
          from: "seo-engineer",
          to: project.id,
          color: "#8b5cf6",
          width: 4,
        });
      }
    });

    // Layer 2 → Layer 1: Career/contract work to goals
    // Connect career projects to relevant goals
    careerProjects.forEach((project) => {
      if (project.title.includes("Botanically Crafted SEO")) {
        allConnections.push({
          from: project.id,
          to: "seo-engineer",
          color: "#f59e0b",
          width: 4,
        });
      }
      if (project.title.includes("AIcademy")) {
        allConnections.push({
          from: project.id,
          to: "ai-engineer",
          color: "#f59e0b",
          width: 4,
        });
      }
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

  // Get connected node IDs when a node is selected
  const connectedNodeIds = useMemo(() => {
    if (!selectedNode) return new Set();

    const connected = new Set([selectedNode]);
    treeData.connections.forEach((conn) => {
      if (conn.from === selectedNode) {
        connected.add(conn.to);
      } else if (conn.to === selectedNode) {
        connected.add(conn.from);
      }
    });
    return connected;
  }, [selectedNode, treeData.connections]);

  // Get goals that have incoming connections (reached goals)
  const reachedGoalIds = useMemo(() => {
    const reached = new Set();
    treeData.connections.forEach((conn) => {
      // Check if the connection goes TO a goal (meaning a project is building toward that goal)
      if (
        (conn.to && conn.to.includes("engineer")) ||
        conn.to === "prompt-engineer" ||
        conn.to === "ai-engineer" ||
        conn.to === "ml-engineer" ||
        conn.to === "fullstack-developer"
      ) {
        reached.add(conn.to);
      }
    });
    return reached;
  }, [treeData.connections]);

  // Filter connections to only show those between visible nodes
  const filteredConnections = useMemo(() => {
    const visibleNodeIds = new Set(filteredNodes.map((n) => n.id));
    let connections = treeData.connections.filter(
      (conn) => visibleNodeIds.has(conn.from) && visibleNodeIds.has(conn.to)
    );

    // If a node is selected, only show connections related to that node
    if (selectedNode) {
      connections = connections.filter(
        (conn) => conn.from === selectedNode || conn.to === selectedNode
      );
    }

    return connections;
  }, [treeData.connections, filteredNodes, selectedNode]);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const clearSelection = () => setSelectedNode(null);

  // Zoom functions
  const zoomIn = () => setZoom((prev) => Math.min(prev * 1.2, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev / 1.2, 0.3));
  const resetZoom = () => setZoom(1);

  // Enhanced pan functions with smooth dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      // Left mouse button only
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });

      // Change cursor to indicate dragging
      (e.currentTarget as HTMLElement).style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      // Smooth panning with reduced sensitivity for better control
      const sensitivity = 1.0;
      setPan({
        x: (e.clientX - dragStart.x) * sensitivity,
        y: (e.clientY - dragStart.y) * sensitivity,
      });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);
    // Reset cursor
    (e.currentTarget as HTMLElement).style.cursor = "grab";
  };

  const resetView = () => {
    setZoom(1);
    // Center the tree in the viewport
    // Our viewBox is "-200 -100 1200 700" and tree center is around x=400, y=300
    setPan({ x: 0, y: -50 });
  };

  // Enhanced mouse wheel zoom with smooth transitions
  const handleWheel = (e: React.WheelEvent) => {
    // Only handle wheel events when mouse is over the tree area
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check if mouse is within the tree bounds
    if (
      mouseX >= 0 &&
      mouseX <= rect.width &&
      mouseY >= 0 &&
      mouseY <= rect.height
    ) {
      // Prevent default scroll behavior and zoom only when over the tree
      e.preventDefault();
      e.stopPropagation();

      // Smoother zoom factor
      const delta = e.deltaY > 0 ? 0.95 : 1.05;
      const newZoom = Math.max(0.2, Math.min(4, zoom * delta));

      // Calculate the mouse position relative to the current pan and zoom
      const worldMouseX = (mouseX - pan.x) / zoom;
      const worldMouseY = (mouseY - pan.y) / zoom;

      // Calculate new pan to keep the mouse position fixed during zoom
      const newPanX = mouseX - worldMouseX * newZoom;
      const newPanY = mouseY - worldMouseY * newZoom;

      // Apply smooth transitions
      setZoom(newZoom);
      setPan({ x: newPanX, y: newPanY });
    }
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
      <div className="flex h-[calc(100vh-200px)] bg-slate-800 dark:bg-slate-900">
        {/* Skill Tree */}
        <div className="flex-1 relative overflow-hidden bg-slate-800 dark:bg-slate-900">
          <div
            className="w-full h-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onDoubleClick={resetView}
            style={{ touchAction: "none" }}
          >
            <svg
              width="100%"
              height="100%"
              className="min-w-full min-h-full transition-transform duration-75 ease-out"
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, rgba(148, 163, 184, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(148, 163, 184, 0.1) 0%, transparent 50%)",
              }}
              viewBox="-200 -100 1200 700"
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
                        selectedNode === node.id
                          ? "#fef3c7" // Light yellow for selected node
                          : connectedNodeIds.has(node.id)
                          ? "#fef3c7" // Light yellow for connected nodes
                          : node.type === "goal" && reachedGoalIds.has(node.id)
                          ? "#dc2626" // Red for reached goals
                          : node.type === "goal"
                          ? "#6b7280" // Grey for unreached goals
                          : node.type === "skill" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 3
                          ? "#10b981" // Bright green for advanced skills (Layer 4)
                          : node.type === "skill" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 5
                          ? "#059669" // Medium green for core skills (Layer 6)
                          : node.type === "skill"
                          ? "#10b981" // Green for other skills
                          : node.type === "project" &&
                            node.y === TREE_CONFIG.rootY
                          ? "#f59e0b" // Gold for career projects (Layer 1)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 2
                          ? "#1e40af" // Dark blue for advanced projects/certificates (Layer 3)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 4
                          ? "#3b82f6" // Medium blue for intermediate projects (Layer 5)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 6
                          ? "#60a5fa" // Light blue for baseline projects (Layer 7)
                          : "#3b82f6"
                      }
                      stroke={
                        selectedNode === node.id
                          ? "#ef4444" // Red border for selected node
                          : connectedNodeIds.has(node.id)
                          ? "#f59e0b" // Orange border for connected nodes
                          : node.type === "goal" && reachedGoalIds.has(node.id)
                          ? "#991b1b" // Dark red border for reached goals
                          : node.type === "goal"
                          ? "#4b5563" // Grey border for unreached goals
                          : node.type === "skill" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 3
                          ? "#047857" // Dark green border for advanced skills (Layer 4)
                          : node.type === "skill" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 5
                          ? "#064e3b" // Darker green border for core skills (Layer 6)
                          : node.type === "skill"
                          ? "#059669" // Green border for other skills
                          : node.type === "project" &&
                            node.y === TREE_CONFIG.rootY
                          ? "#d97706" // Dark gold border for career projects (Layer 1)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 2
                          ? "#1e40af" // Dark blue border for advanced projects/certificates (Layer 3)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 4
                          ? "#2563eb" // Medium blue border for intermediate projects (Layer 5)
                          : node.type === "project" &&
                            node.y ===
                              TREE_CONFIG.rootY + TREE_CONFIG.layerSpacing * 6
                          ? "#3b82f6" // Light blue border for baseline projects (Layer 7)
                          : "#2563eb"
                      }
                      strokeWidth={
                        selectedNode === node.id
                          ? "4"
                          : connectedNodeIds.has(node.id)
                          ? "3"
                          : "2"
                      }
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
                      className="text-xs font-semibold fill-white dark:fill-slate-900"
                      style={{
                        textShadow:
                          "0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)",
                        fontSize: "11px",
                        letterSpacing: "0.025em",
                      }}
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

        {/* Legend */}
        <div className="w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 p-6 overflow-y-auto">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            🌳 Tree Legend
          </h3>

          {/* Tree Structure Types */}
          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white text-lg">
              Tree Structure
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-slate-500 rounded-full border-2 border-slate-600"></div>
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">
                    Goals
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Career objectives & aspirations (Grey=Unreached,
                    Red=Reached)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-green-600"></div>
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">
                    Skills
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Capabilities & expertise (Bright Green=Advanced, Dark
                    Green=Core)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-600"></div>
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">
                    Projects
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Work & experiences (Gold=Career, Dark Blue=Advanced, Medium
                    Blue=Intermediate, Light Blue=Baseline)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Types */}
          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white text-lg">
              Connection Types
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-orange-400 rounded"></div>
                <div>
                  <span className="font-medium text-slate-900 dark:text-white">
                    Career Projects → Goals
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Career work contributing to specific goals
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-purple-500 rounded"></div>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Advanced Skills → Career Projects
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Advanced skills enabling career work
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-600 rounded"></div>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Advanced Projects → Goals & Advanced Skills
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    High-level projects building toward goals and advanced
                    capabilities
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-600 rounded"></div>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Intermediate Projects → Advanced Skills
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Projects building advanced capabilities
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-green-500 rounded"></div>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Core Skills → Intermediate Projects
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Core skills enabling new projects
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-500 rounded"></div>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Baseline Projects → Core Skills
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Early projects building core skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tree Layers */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white text-lg">
              Tree Layers
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 1: Career/Contract Work (Top)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 2: Goals (Grey=Unreached, Red=Reached)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 3: Advanced Projects/Certificates
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 4: Advanced Skills
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 5: Intermediate Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 6: Core Skills
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">
                  Layer 7: Baseline Projects (Roots)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSkillTree;
