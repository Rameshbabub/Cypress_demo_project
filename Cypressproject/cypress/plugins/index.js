module.exports = (on, config) => {
    // Other plugins you may already have.
    // ...
    require('@saucelabs/cypress-plugin').default(on, config,
      {
        region: 'us-west-1',
        build: 'myBuild',
        tags: ['example1'],
        Sauce_username: 'ramesh.babu@gaincredit.com',
        sauce_access_key: 'd5d74c8d-ac9a-4a8c-bdfe-e9bdd74ead11'
      }
    )
    return config
  }