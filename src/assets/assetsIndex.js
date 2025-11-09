// src/assets/assetsIndex.js

// 1. Define the context:
// Tell Webpack to look in the './images' directory, 
// look at all files (true), and only include files 
// that match the regex (.*) 
const imagesContext = require.context('./images', true, /\.(jpg|jpeg|png|gif|svg)$/);

const assets = {};

// 2. Map the context keys to clean object properties:
imagesContext.keys().forEach((key) => {
    // Extract the filename (e.g., './cat.jpg' -> 'cat')
    // The key here is the path relative to the context directory
    
    // key.match(/\.\/([^.]+)\./) gets the filename without the path or extension
    const nameMatch = key.match(/\.\/([^.]+)\./); 
    const name = nameMatch ? nameMatch[1] : null;

    if (name) {
        // Use the key to require the module and get its URL path
        assets[name] = imagesContext(key); 
    }
});

export default assets;