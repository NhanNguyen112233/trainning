const madge = require('madge');

madge('./src', {
  fileExtensions: ['ts'],
  excludeRegExp: ['.*\\.spec\\.ts$']
}).then((res) => {
  return res.image('graph.svg');
}).then((writtenImagePath) => {
  console.log('Image written to ' + writtenImagePath);
}).catch((error) => {
  console.error('Error generating dependency graph:', error);
});