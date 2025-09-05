"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, skills, goals } from "@/lib/journey-data";

export default function JourneyDemo() {
  const [selectedCategory, setSelectedCategory] = useState<
    "projects" | "skills" | "goals" | "tree"
  >("tree");

  const categories = [
    {
      id: "tree",
      label: "Tree View",
      count: "5 Layers",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      id: "projects",
      label: "Projects",
      count: projects.length,
      color: "bg-blue-500",
    },
    {
      id: "skills",
      label: "Skills",
      count: skills.length,
      color: "bg-green-500",
    },
    {
      id: "goals",
      label: "Goals",
      count: goals.length,
      color: "bg-purple-500",
    },
  ];

  const renderTreeView = () => (
    <div className="space-y-8">
      {/* Layer 1: Goals */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
          Layer 1: Career Goals (Top)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <Card key={goal.id} className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <CardTitle className="text-base">{goal.title}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      goal.status === "achieved" ? "default" : "secondary"
                    }
                  >
                    {goal.status.replace("_", " ")}
                  </Badge>
                  <Badge variant="outline">{goal.progress}%</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Layer 2: Advanced Skills */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          Layer 2: Advanced Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills
            .filter(
              (skill) => skill.proficiency > 70 || skill.status === "unlocked"
            )
            .map((skill) => (
              <Card key={skill.id} className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <CardTitle className="text-base">{skill.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{skill.proficiency}%</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>

      {/* Layer 3: Intermediate Projects */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          Layer 3: Intermediate Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects
            .filter(
              (project) =>
                project.year >= 2023 && project.status === "completed"
            )
            .map((project) => (
              <Card key={project.id} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <CardTitle className="text-base">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.year}</Badge>
                    <Badge variant="default">Completed</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>

      {/* Layer 4: Foundation Skills */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          Layer 4: Foundation Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills
            .filter(
              (skill) => skill.proficiency <= 70 || skill.status === "partial"
            )
            .map((skill) => (
              <Card key={skill.id} className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <CardTitle className="text-base">{skill.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{skill.proficiency}%</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>

      {/* Layer 5: Early Projects */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          Layer 5: Early Projects (Roots)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects
            .filter(
              (project) =>
                project.year <= 2022 || project.status === "completed"
            )
            .map((project) => (
              <Card key={project.id} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <CardTitle className="text-base">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.year}</Badge>
                    <Badge variant="default">Completed</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.year}</Badge>
                    <Badge
                      variant={
                        project.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {project.summary}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.skillsGained.map((skillId) => {
                      const skill = skills.find((s) => s.id === skillId);
                      return skill ? (
                        <Badge
                          key={skillId}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill.title}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${
                      skill.status === "unlocked"
                        ? "from-green-400 to-green-600"
                        : skill.status === "partial"
                        ? "from-yellow-400 to-yellow-600"
                        : "from-gray-400 to-gray-600"
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  {/* Progress ring */}
                  <svg className="absolute inset-0 w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 20 * (1 - skill.proficiency / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        skill.status === "unlocked" ? "default" : "secondary"
                      }
                    >
                      {skill.status}
                    </Badge>
                    <Badge variant="outline">{skill.proficiency}%</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Proficiency:</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">
                    Contributes to Goals:
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(skill.weightByGoal).map(
                      ([goalId, weight]) => {
                        const goal = goals.find((g) => g.id === goalId);
                        return goal ? (
                          <div
                            key={goalId}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <span className="text-sm">{goal.title}</span>
                            <Badge variant="outline">
                              {Math.round(weight * 100)}%
                            </Badge>
                          </div>
                        ) : null;
                      }
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderGoals = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((goal, index) => (
        <motion.div
          key={goal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${
                      goal.status === "achieved"
                        ? "from-purple-400 to-purple-600"
                        : goal.status === "in_progress"
                        ? "from-orange-400 to-orange-600"
                        : "from-gray-400 to-gray-600"
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  {/* Progress ring */}
                  <svg className="absolute inset-0 w-14 h-14 transform -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 24}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 24 * (1 - goal.progress / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-lg">{goal.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        goal.status === "achieved"
                          ? "default"
                          : goal.status === "in_progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {goal.status.replace("_", " ")}
                    </Badge>
                    <Badge variant="outline">{goal.progress}%</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {goal.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Progress:</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {goal.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            🌳 My Journey - Hierarchical Tree Demo
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore my professional journey through a hierarchical tree
            structure showing progression from early projects to advanced skills
            to career goals.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-lg">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id as "projects" | "skills" | "goals" | "tree")}
                className="relative"
              >
                <span className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.label}
                  <Badge variant="outline" className="ml-1">
                    {category.count}
                  </Badge>
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          {selectedCategory === "tree" && renderTreeView()}
          {selectedCategory === "projects" && renderProjects()}
          {selectedCategory === "skills" && renderSkills()}
          {selectedCategory === "goals" && renderGoals()}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Ready to explore the interactive version?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the full interactive skill tree with drag-and-drop,
                search, filtering, and detailed exploration.
              </p>
              <Button asChild size="lg">
                <a href="/journey">🚀 Launch Interactive Skill Tree</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
