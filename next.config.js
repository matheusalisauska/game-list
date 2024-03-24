const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
    images: {
        domains: ['cdn.akamai.steamstatic.com']
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
});
