/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ganache.studio',

  generateRobotsTxt: true,

  outDir: './out',

  transform: async (config, path) => {
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'weekly',
      },
      '/film-fiction': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/film-documentaire': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/film-musique': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/capsules': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/contact': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/film-pub': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/location': {
        priority: 0.7,
        changefreq: 'monthly',
      },
      '/legal': {
        priority: 0.3,
        changefreq: 'yearly',
      },
      '/ganache-festival': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/ganache-festival-2024': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/ganache-festival-2023': {
        priority: 0.9,
        changefreq: 'monthly',
      },
    };

    const customPage = customConfig[path];

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: customPage?.changefreq || 'monthly',
      priority: customPage?.priority || 0.7,
    };
  },

  exclude: ['/404', '/_*'],

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
