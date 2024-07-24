module.exports = {
  // Add custom asset extensions (e.g., fonts, images)
  assets: ['./assets/fonts'],

  // Specify dependencies that need to be linked (e.g., native modules)
  dependencies: {
    // Example of a native module that needs to be linked
    'react-native-maps': {
      platforms: {
        android: null, // Disable auto-linking on Android
      },
    },
  },
};
