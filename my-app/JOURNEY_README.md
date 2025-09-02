# 🌳 My Journey - Interactive Skill Tree

An interactive, game-style skill tree that visualizes my professional journey from projects to skills to career goals. Built with Next.js, React Flow, and Framer Motion.

## 🚀 Features

### Core Functionality
- **Interactive Graph**: Drag, zoom, and pan through your skill tree
- **Node Types**: Projects (blue), Skills (green), and Goals (purple)
- **Path Visualization**: See how projects unlock skills and skills contribute to goals
- **Progress Tracking**: Visual progress bars for skills and goals
- **Smart Recommendations**: AI-powered next steps for achieving goals

### User Experience
- **Search & Filter**: Find specific projects, skills, or goals by text or tags
- **Detail Panels**: Click any node to see comprehensive information
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Support**: Seamless theme integration
- **Keyboard Navigation**: Full accessibility support

### Visual Elements
- **Animated Nodes**: Smooth hover effects and transitions
- **Progress Indicators**: Color-coded status and completion bars
- **Interactive Edges**: Animated connections between related nodes
- **Mini Map**: Overview of the entire skill tree
- **Legend**: Clear visual guide to node types

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14 + TypeScript
- **Graph Library**: React Flow
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/ui
- **State Management**: React hooks + useMemo/useCallback

### Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  year: number;
  summary: string;
  skillsGained: string[];
  tags: string[];
  links: { label: string; url: string }[];
  impact: string[];
  status: 'completed' | 'in_progress' | 'planned';
}

interface Skill {
  id: string;
  title: string;
  description: string;
  weightByGoal: Record<string, number>;
  tags: string[];
  proficiency: number; // 0-100
  status: 'locked' | 'partial' | 'unlocked';
}

interface Goal {
  id: string;
  title: string;
  status: 'achieved' | 'in_progress' | 'future';
  tags: string[];
  description: string;
  progress: number; // 0-100
}

interface Edge {
  id: string;
  from: string;
  to: string;
  type: 'project->skill' | 'skill->goal' | 'skill->skill';
  weight?: number;
}
```

## 📊 How It Works

### 1. Project → Skill Mapping
- Each project you complete unlocks specific skills
- Skills have proficiency levels (0-100%)
- Multiple projects can contribute to the same skill

### 2. Skill → Goal Contribution
- Skills contribute to career goals with weighted importance
- Goal progress = weighted average of contributing skills
- Some skills are prerequisites for others

### 3. Progress Calculation
- **Skill Progress**: Based on completed supporting projects
- **Goal Progress**: Weighted aggregation of prerequisite skills
- **Recommendations**: Prioritized list of skills to improve next

### 4. Visual States
- **Projects**: Blue nodes with completion indicators
- **Skills**: Green (unlocked), Yellow (partial), Gray (locked)
- **Goals**: Purple (achieved), Orange (in-progress), Gray (future)

## 🛠️ How to Update

### Adding New Projects
1. Open `lib/journey-data.ts`
2. Add to `projects` array:
```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  year: 2024,
  summary: 'Brief description',
  skillsGained: ['skill-id-1', 'skill-id-2'],
  tags: ['tag1', 'tag2'],
  links: [
    { label: 'Demo', url: 'https://...' },
    { label: 'GitHub', url: 'https://...' }
  ],
  impact: ['Impact point 1', 'Impact point 2'],
  status: 'completed'
}
```

### Adding New Skills
1. Add to `skills` array:
```typescript
{
  id: 'skill-id',
  title: 'Skill Name',
  description: 'What this skill enables',
  weightByGoal: { 'goal-id': 0.8 },
  tags: ['category'],
  proficiency: 75,
  status: 'unlocked'
}
```

### Adding New Goals
1. Add to `goals` array:
```typescript
{
  id: 'goal-id',
  title: 'Career Goal',
  status: 'in_progress',
  tags: ['category'],
  description: 'What this goal represents',
  progress: 60
}
```

### Updating Edges
1. Add to `edges` array:
```typescript
// Project unlocks skill
{ id: 'e1', from: 'project-id', to: 'skill-id', type: 'project->skill' }

// Skill contributes to goal
{ id: 'e2', from: 'skill-id', to: 'goal-id', type: 'skill->goal', weight: 0.8 }

// Skill dependency
{ id: 'e3', from: 'prerequisite-skill', to: 'advanced-skill', type: 'skill->skill' }
```

## 🎯 Best Practices

### Node IDs
- Use kebab-case: `ai-resume-builder`
- Keep them short but descriptive
- Ensure uniqueness across all node types

### Tags
- Use consistent, lowercase tags
- Group related concepts: `ai`, `ml`, `frontend`, `backend`
- Limit to 3-5 tags per node for readability

### Weights
- Use values between 0.1 and 1.0
- Higher weights = more important for the goal
- Total weights for a goal should typically sum to 3-5

### Progress Updates
- Update skill proficiency based on new projects
- Recalculate goal progress after skill changes
- Mark goals as achieved when reaching 100%

## 🔧 Customization

### Styling
- Modify node colors in `components/skill-tree.tsx`
- Update Tailwind classes for different themes
- Customize animations in Framer Motion components

### Layout
- Adjust node positioning in the `useMemo` hook
- Change spacing between layers (currently 250px horizontal, 300px vertical)
- Modify edge styles and animations

### Functionality
- Add new node types by extending the interfaces
- Implement additional filtering options
- Create custom progress calculation algorithms

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy
- Vercel: Automatic deployment from GitHub
- Netlify: Build command `npm run build`, publish directory `out`
- Other platforms: Standard Next.js static export

### Environment Variables
- No sensitive data in the skill tree
- All data is public and embedded in the build
- No API keys or external dependencies

## 📱 Mobile Experience

### Responsive Design
- Touch-friendly node interactions
- Swipe gestures for panning
- Optimized detail panel layout
- Collapsible filters for small screens

### Performance
- Virtualized rendering for large graphs
- Debounced search and filter operations
- Optimized animations for mobile devices

## 🔍 Troubleshooting

### Common Issues
1. **Nodes not rendering**: Check node IDs in edges match node IDs
2. **Layout broken**: Verify position coordinates are reasonable
3. **Performance slow**: Reduce number of nodes or implement virtualization
4. **Type errors**: Ensure all required fields are provided in data

### Debug Mode
- Check browser console for React Flow warnings
- Verify data structure matches interfaces
- Test with minimal data set first

## 🎨 Future Enhancements

### Planned Features
- [ ] Export to PNG/SVG
- [ ] Timeline view of progress
- [ ] Achievement badges
- [ ] Social sharing
- [ ] Progress analytics
- [ ] Custom themes

### Integration Ideas
- [ ] GitHub integration for project updates
- [ ] LinkedIn skill endorsements
- [ ] Learning platform progress sync
- [ ] Career goal tracking

## 📚 Resources

- [React Flow Documentation](https://reactflow.dev/)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

This skill tree is designed to be easily maintainable and customizable. Feel free to:

1. Update your own journey data
2. Modify the visual design
3. Add new features
4. Improve the user experience

The modular architecture makes it simple to extend without breaking existing functionality.

---

**Happy journey mapping! 🌳✨**
