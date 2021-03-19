export const API_URIS = {
  CASE_STATUS: 'api/covidstats/bystatus',
  OUTBREAK_STATS: 'api/covidstats/ongoing',
  SCHOOL_SUMMARY: 'api/covidstats/schools/summary',
  SCHOOL_TESTING: 'api/covidstats/schools/testing',
  ACTIVE_PARTNERS: 'api/covidstats/schools/activepartners'
} as const;

export type API_URI = typeof API_URIS[keyof typeof API_URIS];
