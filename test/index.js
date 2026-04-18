// Skip execution in Node
if (module.hot) {
  const context = require.context(
    'mocha-loader!./', // Process through mocha-loader
    false, // Skip recursive processing
    /\.test.js$/ // eslint-disable-line 
  );

  // Execute each test suite
  context.keys().forEach(context);
}
