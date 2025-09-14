const { exec } = require('child_process');

exec('node scripts/remove-big12-walkon.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;  
  }
  console.log(stdout);
});

// Also run the script directly
require('./scripts/remove-big12-walkon.js');