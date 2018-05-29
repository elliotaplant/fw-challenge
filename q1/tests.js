const {processProgramName, replaceAll, aphaSortNoApostrophes} = require('./processProgramName');
const TestRunner = require('../TestRunner');

// Basic console.assert tests for question 1

const testRunner = new TestRunner();

// replaceAll tests
testRunner.registerTest('replaceAll should work for apostrophes', () => {
  const withApostrophes = "My'string'";
  const doubledApostrophes = replaceAll(withApostrophes, "'", "''");
  console.assert("My''string''");
});

// aphaSortNoApostrophes tests
testRunner.registerTest('aphaSortNoApostrophes should sort strings without apostrophes', () => {
  console.assert(['b', 'a'].sort(aphaSortNoApostrophes).join() === ['a', 'b'].join());
});

testRunner.registerTest('aphaSortNoApostrophes should ignore apostrophes while sorting', () => {
  console.assert(["'b", 'a'].sort(aphaSortNoApostrophes).join() === ['a', "'b"].join());
});

// processProgramName tests
testRunner.registerTest('processProgramName should work on a single program name', () => {
  console.assert(processProgramName(['Test']) === "'Test'");
});

testRunner.registerTest('processProgramName should work on an empty list of program names', () => {
  console.assert(processProgramName([]) === '');
});

testRunner.registerTest('processProgramName should work on a program name with a single apostrophe', () => {
  console.assert(processProgramName(["Tes't"]) === "'Tes''t'");
});

testRunner.registerTest('processProgramName should work on a program name with multiple apostrophes', () => {
  console.assert(processProgramName(["T'es't"]) === "'T''es''t'");
});

testRunner.registerTest('processProgramName should double each apostrophe even if is adjacent to another apostrophe', () => {
  console.assert(processProgramName(["Tes''t"]) === "'Tes''''t'");
});

testRunner.registerTest('processProgramName should work on two program names', () => {
  console.assert(processProgramName(['Test1', 'Test2']) === "'Test1','Test2'");
});

testRunner.registerTest('processProgramName should alphabetically sort multiple program names', () => {
  console.assert(processProgramName(['Test2', 'Test1']) === "'Test1','Test2'");
});

testRunner.registerTest('processProgramName should alphabetically sort multiple program names with apostrophes', () => {
  console.log(`processProgramName(['Test1', 'Test3', "Test'2"])`,processProgramName(['Test1', 'Test3', "Test'2"]));
  console.assert(processProgramName(['Test1', 'Test3', "Test'2"]) === "'Test1','Test''2','Test3'");
});

testRunner.runTests();