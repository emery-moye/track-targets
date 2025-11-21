const { execSync } = require('child_process');

console.log('Adding 1600m standards for MVC and CAA schools...\n');

try {
  execSync('node scripts/add-1600m-mvc-caa.js', { stdio: 'inherit' });
  console.log('\n✅ Complete!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
