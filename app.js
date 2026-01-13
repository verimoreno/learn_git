// Git Learning Project - JavaScript
// My git learning project
console.log('Welcome to Git Learning Project!');

// Simple greeting function
function greet(name) {
    return `Hello, ${name}! Ready to learn Git?`;
}

// Display current date
function showDate() {
    const today = new Date();
    return today.toLocaleDateString();
}

// Feature toggle (for practice)
const features = {
    darkMode: false,
    animations: true,
    notifications: true
};

// Toggle a feature
function toggleFeature(featureName) {
    if (features.hasOwnProperty(featureName)) {
        features[featureName] = !features[featureName];
        console.log(`${featureName} is now ${features[featureName] ? 'ON' : 'OFF'}`);
    }
}

// Initialize the app
function init() {
    console.log('App initialized on:', showDate());
    console.log(greet('Developer'));
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
