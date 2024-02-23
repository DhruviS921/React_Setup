// valid comit msg format :- CR-4 fix: Added rules for jira
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+-\d+)\s+(\w+):\s+(.*)$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'style']],
    'type-case': [2, 'always', ['lower-case']],
    'subject-case': [2, 'always', ['upper-case', 'lower-case', 'sentence-case']],
    'subject-max-length': [2, 'always', 50],
  },
};
