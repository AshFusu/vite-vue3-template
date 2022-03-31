import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: [
    '@commitlint/config-conventional' /* @commitlint/config-conventional */,
    'cz' /* commitlint-config-cz */
  ],
  rules: {
    'scope-case': [0],
    'scope-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always']
  }
}

module.exports = Configuration
