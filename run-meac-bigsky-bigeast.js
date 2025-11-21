const { execSync } = require('child_process');

console.log('Adding 1600m standards for MEAC, Big Sky, and Big East schools...\n');

try {
  execSync('node scripts/add-1600m-meac-bigsky-bigeast.js', { stdio: 'inherit' });
  console.log('\n✅ Complete!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
