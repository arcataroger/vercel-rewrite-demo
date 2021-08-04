module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/(.*)/:slug',
          destination: '/:slug', // Matched parameters can be used in the destination
        },
      ]
    }
  },
};
