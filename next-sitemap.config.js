/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ganache.studio',

  generateRobotsTxt: true,

  outDir: './out',

  transform: async (_, path) => {
    const customConfig = {
      '/': {
        priority: 1.0,
      },
      '/film-fiction': {
        priority: 0.9,
      },
      '/film-documentaire': {
        priority: 0.9,
      },
      '/film-musique': {
        priority: 0.9,
      },
      '/contact': {
        priority: 0.8,
      },
      '/film-pub': {
        priority: 0.8,
      },
      '/location': {
        priority: 0.7,
      },
      '/legal': {
        priority: 0.3,
      },
      '/ganache-festival': {
        priority: 0.9,
      },
      '/ganache-festival-2023': {
        priority: 0.9,
      },
      '/ganache-festival-2024': {
        priority: 0.9,
      },
      '/ganache-festival-2025': {
        priority: 0.9,
      },
    };

    const customPage = customConfig[path];

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: customPage?.priority || 0.7,
    };
  },

  exclude: ['/_*'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/static/'],
      },
    ],
  },
};
