{ console.log('--- strict not-equality ---')


console.log('--- develop test cases ---')

  const strict_not_cases = [
    {name: 'numbers only', args: [1234, '1234'], expected: true}
  ];
  function strict_not_equality(_a, _b) {
    return _a !== _b
  }
  run_tests(strict_not_equality, strict_not_cases);

console.log('--- replicated strict not-equality ---')

  function strict_not_replication(_a, _b) {
    let result;
    // replicate the behavior of !==
    return result
  }
  run_tests(strict_not_replication, strict_not_cases)









// testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}