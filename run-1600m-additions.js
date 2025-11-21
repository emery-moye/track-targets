const { execSync } = require('child_process');

console.log('Adding 1600m standards for Big Ten, MAC, and Ivy League schools...\n');

try {
  execSync('node scripts/add-1600m-big-mac-ivy.js', { stdio: 'inherit' });
  console.log('\n✅ Complete!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
