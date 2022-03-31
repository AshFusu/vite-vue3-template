// Doc: https://github.com/leoforfree/cz-customizable

module.exports = {
  // prettier-ignore
  types: [
    { value: 'feat',      name: 'feat:       A new feature' },
    { value: 'fix',       name: 'fix:        A bug fix' },
    { value: 'style',     name: 'style:      Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)' },
    { value: 'perf',      name: 'perf:       A code change that improves performance' },
    { value: 'refactor',  name: 'refactor:   A code change that neither fixes a bug nor adds a feature' },
    { value: 'revert',    name: 'revert:     Revert to a commit' },
    { value: 'test',      name: 'test:       Adding missing tests or correcting existing tests' },
    { value: 'docs',      name: 'docs:       Documentation only changes' },
    { value: 'chore',     name: 'chore:      Changes to the build process or auxiliary tools and libraries such as documentation generation' },
    { value: 'ci',        name: 'ci:         Changes to our CI configuration files and scripts' },
    { value: 'types',     name: 'types:      Typescript types only changes' },
    { value: 'mod',       name: 'mod:        Modification of indeterminate classification' },
  ],

  messages: {
    // type: "Select the type of change that you're committing:",
    // scope: 'Denote the SCOPE of this change (optional):',
    // customScope: ' Denote the SCOPE of this change:',
    // subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    // footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    // confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  // Specify the scopes for your particular project. Eg.: for some banking system: ["acccounts", "payments"]
  scopes: [],

  // Use this when you want to override scopes for a specific commit type.
  scopeOverrides: {},

  // Adds the option custom to scope selection so you can still type a scope if you need.
  allowCustomScopes: true,

  // This is the subject limit.
  subjectLimit: 70,

  // This is the subject separator. Example: feat: this is a new feature
  subjectSeparator: ': ',

  /*
   * config: { typePrefix: '[', typeSuffix: ']', subjectSeparator: ' ' }
   * result: [feat] this is a new feature
   */
  // This is the commit type suffix.
  typePrefix: '',

  // This is the commit type suffix.
  typeSuffix: '',

  // List of commit types you would like to the question breaking change prompted. Eg.: ['feat', 'fix'].
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'types'],

  // List of questions you want to skip. Eg.: ['body', 'footer']
  skipQuestions: ['footer'],

  // Set custom prefix for footer ticker number
  ticketNumberPrefix: '',

  // Set a custom prefix for the breaking change block in commit messages.
  breakingPrefix: 'BREAKING CHANGE:',

  // Set a custom prefix for the footer block in commit messages. Set to empty string to remove prefix.
  footerPrefix: '',

  // It gets replaced with \n to create the breakline in your commit message. This is supported for fields body and footer at the moment.
  breaklineChar: '|',

  // Capitalizes first subject letter if set to true
  upperCaseSubject: false,

  // It asks for breaking change as first question when set to true
  askForBreakingChangeFirst: false
}
