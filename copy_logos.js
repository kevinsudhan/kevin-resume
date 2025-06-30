const fs = require('fs');
const path = require('path');

// Mapping of source files to destination names
const logoMapping = {
  'nextjs.png': 'nextjs.svg',
  'react.jpg': 'react.svg',
  'Typescript-01.png': 'typescript.svg',
  'JavaScript-Logo.png': 'javascript.svg',
  'Tailwind_CSS_Logo.svg.png': 'tailwind.svg',
  'supabase-logo-png_seeklogo-435677.png': 'supabase.svg',
  'mongodb-logo-png_seeklogo-481256.png': 'mongodb.svg',
  'etheriumm.png': 'ethereum.svg',
  'yologo_2_lopvlj.png': 'yolo.svg',
  'web3-logo-png_seeklogo-436086.png': 'web3.svg',
  'blockchain-icon-design-cryptocurrency-vector-digital-logo-blockchain-icon-design-cryptocurrency-vector-digital-logo-201091629.webp': 'blockchain.svg',
  'dapp.webp': 'dapp.svg',
  'API ML.avif': 'pwa.svg',
  'LIDAR.webp': 'lidar.svg',
  'ollama-logo-png_seeklogo-593420.png': 'ai.svg',
  'LLAMA 3.jpg': 'llama3.svg',
  'TWITTER API.jpg': 'twitter.svg',
  'REDDIT.jpg': 'reddit.svg',
  'YAHOO FINANCE.png': 'yahoo.svg',
  'ESP32.png': 'esp32.svg',
  'RASBPERRY PI.png': 'raspberry-pi.svg',
  'framer-motion-logo-1-312x211.png': 'framer.svg',
  'Lifi_Logo.svg.png': 'lifi.svg',
  'SOLENOID.jpg': 'hardware.svg',
  'MOSFETS.png': 'hardware.svg'
};

// Create a generic code icon as fallback
const genericCodeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"></polyline>
  <polyline points="8 6 2 12 8 18"></polyline>
</svg>
`;

// Create the fallback icon
fs.writeFileSync(path.join(__dirname, 'public', 'icons', 'code.svg'), genericCodeIcon);
console.log('Created fallback icon: code.svg');

// Copy and rename each logo
Object.entries(logoMapping).forEach(([source, dest]) => {
  try {
    // Check if the source file exists
    if (fs.existsSync(path.join(__dirname, 'logos', source))) {
      fs.copyFileSync(
        path.join(__dirname, 'logos', source),
        path.join(__dirname, 'public', 'icons', dest)
      );
      console.log(`Copied: ${source} -> ${dest}`);
    } else {
      console.log(`Source file not found: ${source}`);
    }
  } catch (err) {
    console.error(`Error copying ${source}: ${err.message}`);
  }
});

console.log('Finished copying logos');
