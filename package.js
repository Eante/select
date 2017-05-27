Package.describe({
  name: 'johnboard:select',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Reactive select package for use by Eante Development',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Eante/select',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
  api.use('ecmascript');
  api.mainModule('select.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('johnboard:select');
  api.mainModule('select-tests.js');
});
