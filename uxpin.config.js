module.exports = {
  components: {
    categories: [
      {
        name: 'Uncategorized',
        include: [
          'src/components/*.js',
          '!src/components/*.stories.js',

          '!src/components/Highlight.js',

          '!src/components/Link.js',
          '!src/components/index.js',

          'src/components/modal/*.js',
          '!src/components/modal/*.stories.js',

          'src/components/tooltip/*.js',
          '!src/components/tooltip/*.stories.js'
        ]
      }
    ]
  }
};
