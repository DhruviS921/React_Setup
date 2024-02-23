module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor']],
    'type-case': [2, 'always', ['lower-case']],
    'subject-case': [2, 'always', ['upper-case', 'lower-case', 'sentence-case']],
    // 'jira-ticket-id': [2, 'always', [/^CR-[0-9]+$/]],
  },
};
