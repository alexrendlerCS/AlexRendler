// Simple validation tests for journey data
import { projects, skills, goals, edges, getNodeById, calculateGoalProgress } from './journey-data';

console.log('🧪 Testing Journey Data Structure...\n');

// Test 1: Check if all nodes have unique IDs
const allIds = [
  ...projects.map(p => p.id),
  ...skills.map(s => s.id),
  ...goals.map(g => g.id)
];

const duplicateIds = allIds.filter((id, index) => allIds.indexOf(id) !== index);
if (duplicateIds.length > 0) {
  console.error('❌ Duplicate IDs found:', duplicateIds);
} else {
  console.log('✅ All node IDs are unique');
}

// Test 2: Check if all edges reference valid nodes
const allNodeIds = new Set(allIds);
const invalidEdges = edges.filter(edge => 
  !allNodeIds.has(edge.from) || !allNodeIds.has(edge.to)
);

if (invalidEdges.length > 0) {
  console.error('❌ Invalid edges found:', invalidEdges);
} else {
  console.log('✅ All edges reference valid nodes');
}

// Test 3: Check if all skills referenced in projects exist
const allSkillIds = new Set(skills.map(s => s.id));
const invalidSkillReferences = projects.flatMap(project => 
  project.skillsGained.filter(skillId => !allSkillIds.has(skillId))
);

if (invalidSkillReferences.length > 0) {
  console.error('❌ Invalid skill references in projects:', invalidSkillReferences);
} else {
  console.log('✅ All project skill references are valid');
}

// Test 4: Check if all goal references in skills exist
const allGoalIds = new Set(goals.map(g => g.id));
const invalidGoalReferences = skills.flatMap(skill => 
  Object.keys(skill.weightByGoal).filter(goalId => !allGoalIds.has(goalId))
);

if (invalidGoalReferences.length > 0) {
  console.error('❌ Invalid goal references in skills:', invalidGoalReferences);
} else {
  console.log('✅ All skill goal references are valid');
}

// Test 5: Test helper functions
const testNode = getNodeById('ai-engineer');
if (testNode && testNode.type === 'goal') {
  console.log('✅ getNodeById function works correctly');
} else {
  console.error('❌ getNodeById function failed');
}

const progress = calculateGoalProgress('ai-engineer');
if (typeof progress === 'number' && progress >= 0 && progress <= 100) {
  console.log('✅ calculateGoalProgress function works correctly');
} else {
  console.error('❌ calculateGoalProgress function failed');
}

// Test 6: Data summary
console.log('\n📊 Data Summary:');
console.log(`Projects: ${projects.length}`);
console.log(`Skills: ${skills.length}`);
console.log(`Goals: ${goals.length}`);
console.log(`Edges: ${edges.length}`);

// Test 7: Check for missing data
const projectsWithoutLinks = projects.filter(p => p.links.length === 0);
const projectsWithoutImpact = projects.filter(p => p.impact.length === 0);
const skillsWithoutDescription = skills.filter(s => !s.description);
const goalsWithoutDescription = goals.filter(s => !s.description);

if (projectsWithoutLinks.length > 0) {
  console.warn('⚠️  Projects without links:', projectsWithoutLinks.map(p => p.title));
}
if (projectsWithoutImpact.length > 0) {
  console.warn('⚠️  Projects without impact:', projectsWithoutImpact.map(p => p.title));
}
if (skillsWithoutDescription.length > 0) {
  console.warn('⚠️  Skills without description:', skillsWithoutDescription.map(s => s.title));
}
if (goalsWithoutDescription.length > 0) {
  console.warn('⚠️  Goals without description:', goalsWithoutDescription.map(g => g.title));
}

console.log('\n🎉 Journey data validation complete!');
