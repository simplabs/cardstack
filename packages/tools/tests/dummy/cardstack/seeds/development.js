/* eslint-env node */

module.exports = [
  {
    type: 'plugin-configs',
    id: 0,
    attributes: {
      module: '@cardstack/server'
    },
    relationships: {
      'default-data-source': {
        data: { type: 'data-sources', id: 0 }
      }
    }
  },
  {
    type: 'plugin-configs',
    id: 1,
    attributes: {
      module: '@cardstack/git'
    }
  },
  {
    type: 'data-sources',
    id: 0,
    attributes: {
      'source-type': '@cardstack/git',
      params: {
        // Location of our git repository
        repo: __dirname + '/../../../../..',

        // Path within git repository that's reserve for us to read
        // and write our content.
        basePath: 'packages/tools/tests/dummy/cardstack',

        // Keep all of the branches we manage segregated under this
        // prefix. So when the user queries 'master' they will really
        // be querying cs-master in our repo.
        //
        // This is intended as a development-mode feature for people
        // who are actively managing their own local git
        // repository. In production or in friendly-desktop mode, this
        // feature should not be needed.
        branchPrefix: 'cs-'
      }
    }
  }
];
