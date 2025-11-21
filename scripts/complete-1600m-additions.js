const fs = require('fs');
const { execSync } = require('child_process');

console.log('Running comprehensive 1600m standards addition...\n');
console.log('This will add 1600m standards for ACC, A10, and Big West schools.\n');

try {
  execSync('node scripts/add-all-1600m-standards.js', { stdio: 'inherit' });
  console.log('\n✅ Complete! Check the output above for details.');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
