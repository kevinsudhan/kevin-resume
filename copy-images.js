const fs = require('fs');
const path = require('path');

const projectFolders = [
  'WHISTLE',
  'MITHRA',
  'EBS',
  'NEWS BOT',
  'STAMS',
  'DYNA BRAILLE',
  'DEMETE'
];

const projectBaseDir = path.resolve(__dirname); // Current directory

// Create public folder if it doesn't exist
const publicDir = path.join(projectBaseDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('Created public directory');
}

// Copy each project's images
projectFolders.forEach(folder => {
  const sourcePath = path.join(projectBaseDir, folder);
  const destPath = path.join(publicDir, folder);
  
  // Skip if source doesn't exist
  if (!fs.existsSync(sourcePath)) {
    console.log(`Source directory not found: ${sourcePath}`);
    return;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  // Get all files in the source directory
  try {
    const files = fs.readdirSync(sourcePath);
    
    // Copy each file to destination
    files.forEach(file => {
      const sourceFull = path.join(sourcePath, file);
      const destFull = path.join(destPath, file);
      
      // Skip if it's a directory
      if (fs.statSync(sourceFull).isDirectory()) {
        console.log(`Skipping directory: ${sourceFull}`);
        return;
      }
      
      // Copy the file
      fs.copyFileSync(sourceFull, destFull);
      console.log(`Copied: ${sourceFull} -> ${destFull}`);
    });
  } catch (err) {
    console.error(`Error reading directory ${sourcePath}: ${err.message}`);
  }
});

console.log('Image copying complete!');
