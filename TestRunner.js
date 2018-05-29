// Small class for registering and running tests
class TestRunner {
  constructor() {
    this.tests = [];
  }

  registerTest(name, test) {
    this.tests.push({ name, test });
  }

  runTests() {
    this.tests.forEach(({name, test}) => {
      try {
        test();
        console.log(`[passed] ${name}`);
      } catch (e) {
        console.log(`[failed] ${name}`);
        console.error(e);
      }
    });
  }
}

module.exports = TestRunner;
