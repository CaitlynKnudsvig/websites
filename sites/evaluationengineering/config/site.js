const ads = require('./ads');

module.exports = {
  ads,
  logo: {
    src: 'https://base.imgix.net/files/base/ebm/ee/image/static/logo/site_logo_bare.png',
    srcset: [
      'https://base.imgix.net/files/base/ebm/ee/image/static/logo/site_logo_bare.png 2x',
    ],
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2192877/profile' },
    { provider: 'twitter', href: 'https://twitter.com/EE_Engineers' },
    { provider: 'facebook', href: 'https://www.facebook.com/EvaluationEngineering' },
  ],
  primaryNavItems: [
    { href: '/applications', label: 'Applications' },
    { href: '/industries', label: 'Industries' },
    { href: '/instrumentation', label: 'Instrumentation' },
    { href: '/new-products', label: 'New Products' },
  ],
  secondaryNavItems: [
    { href: '/magazine', label: 'In Print' },
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/advertise', label: 'Advertise' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  homeSections: [
    { alias: 'applications', name: 'Applications' },
    { alias: 'instrumentation', name: 'Instrumentation' },
    { alias: 'testing', name: 'Testing' },
    { alias: 'industries', name: 'Industries' },
    { alias: 'whitepapers', name: 'Whitepapers' },
    { alias: 'special-reports', name: 'Special Reports' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-NLCH94B',
  search: {
    engine: 'bing',
    apiKey: '2682f90e71ea403b9cbf6fa7740bf006',
    domain: 'evaluationengineering.com',
  },
};
