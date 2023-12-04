const config = {
  development: {
    apiUrl: 'https://east.admin.cybersecuritylab.az/api/',
    storageUrl: 'https://east.admin.cybersecuritylab.az/storage/', 
  },
  production: {
    apiUrl: 'https://east.admin.cybersecuritylab.az/api/',
    storageUrl: 'https://east.admin.cybersecuritylab.az/storage/', 
  },
};

export default process.env.NODE_ENV === 'production' ? config.production : config.development;