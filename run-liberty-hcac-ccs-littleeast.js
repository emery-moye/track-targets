const { execSync } = require('child_process');

console.log('Adding 1600m standards for Liberty League, HCAC, CCS, and Little East conferences...\n');
console.log('Expected additions: 66 standards (16 + 20 + 12 + 18)\n');

try {
  execSync('node scripts/add-1600m-liberty-hcac-ccs-littleeast.js', { stdio: 'inherit' });
  console.log('\n✅ Complete! Check the output above for details.');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
