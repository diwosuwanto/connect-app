const DOMAIN = 'topcoder.com'

module.exports = {
  API_URL           : 'https://api.topcoder.com/v3',
  API_URL_V2        : 'https://api.topcoder.com/v2',
  WORK_API_URL      : 'https://api-work.topcoder.com/v3',
  INTERNAL_API_URL  : 'https://internal-api.topcoder.com/v3',
  ASSET_PREFIX      : 'https://s3.amazonaws.com/app.topcoder.com/',
  AUTH_API_URL      : 'https://api.topcoder.com/v3',
  auth0Callback     : 'https://api.topcoder.com/pub/callback.html',
  auth0Domain       : 'topcoder.auth0.com',
  clientId          : process.env.AUTH0_CLIENT_ID_PROD,
  AUTH0_DOMAIN      : 'topcoder.auth0.com',
  AUTH0_CLIENT_ID   : process.env.AUTH0_CLIENT_ID_PROD,
  domain            : 'topcoder.com',
  DOMAIN            : 'topcoder.com',
  ENV               : 'PROD',
  NODE_ENV          : 'production',

  PROJECTS_API_URL  : 'https://api.topcoder.com',

  NEW_RELIC_APPLICATION_ID: process.env.TRAVIS_BRANCH ? '11352758' : '',

  ARENA_URL          : '//arena.topcoder.com',
  BLOG_LOCATION      : 'https://www.topcoder.com/feed/',
  COMMUNITY_URL      : '//community.topcoder.com',
  FORUMS_APP_URL     : '//apps.topcoder.com/forums',
  HELP_APP_URL       : 'help.topcoder.com',
  MAIN_URL           : 'https://www.topcoder.com',
  PHOTO_LINK_LOCATION: 'https://community.topcoder.com',
  SWIFT_PROGRAM_URL  : 'apple.topcoder.com',
  TCO16_URL          : 'https://tco16.topcoder.com',
  TCO17_URL          : 'https://tco17.topcoder.com',
  TCO_HOME_URL       : 'https://www.topcoder.com/tco',

  ACCOUNTS_APP_URL             : 'https://accounts-auth0.topcoder.com',
  ACCOUNTS_APP_CONNECTOR_URL   : 'https://accounts-auth0.topcoder.com',
  TYPEFORM_URL      : 'https://topcoder.typeform.com/to/vgqiBXdk',

  FILE_PICKER_API_KEY: process.env.FILE_PICKER_API_KEY_PROD,
  FILE_PICKER_SUBMISSION_CONTAINER_NAME: 'submission-staging-prod',
  FILE_PICKER_ACCEPT: process.env.FILE_PICKER_ACCEPT_PROD,

  SALESFORCE_PROJECT_LEAD_LINK: 'https://topcoder.my.salesforce.com/apex/ConnectLead?connectProjectId=',
  SALESFORCE_BILLING_ACCOUNT_LINK: 'https://topcoder.my.salesforce.com/apex/baredirect?id=',
  CONNECT_SEGMENT_KEY: process.env.PROD_SEGMENT_KEY,
  PREDIX_PROGRAM_ID         : 3448,
  IBM_COGNITIVE_PROGRAM_ID  : 3449,
  HEAP_ANALYTICS_APP_ID     : '638908330',
  PHASE_PRODUCT_TEMPLATE_ID : 67,

  TC_NOTIFICATION_URL: 'https://api.topcoder.com/v5/notifications',
  CONNECT_MESSAGE_API_URL: 'https://api.topcoder.com/v5',
  TC_SYSTEM_USERID: process.env.PROD_TC_SYSTEM_USERID,
  MAINTENANCE_MODE: process.env.PROD_MAINTENANCE_MODE,

  TC_CDN_URL: process.env.TC_CDN_URL,

  DASHBOARD_FAQ_CONTENT_ID : process.env.DASHBOARD_FAQ_CONTENT_ID,
  CONTENTFUL_DELIVERY_KEY : process.env.CONTENTFUL_DELIVERY_KEY,
  CONTENTFUL_SPACE_ID : process.env.CONTENTFUL_SPACE_ID,

  TAAS_APP_URL: 'https://platform.topcoder.com/taas',
  DEFAULT_NDA_UUID: 'c41e90e5-4d0e-4811-bd09-38ff72674490',
  UNIVERSAL_NAV_URL: '//uni-nav.topcoder.com/v1/tc-universal-nav.js',
  HEADER_AUTH_URLS_HREF: `https://accounts-auth0.${DOMAIN}?utm_source=community-app-main`,
  HEADER_AUTH_URLS_LOCATION: `https://accounts-auth0.${DOMAIN}?retUrl=%S&utm_source=community-app-main`
}
