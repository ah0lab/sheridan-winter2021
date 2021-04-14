export const API_URIS = {
  IMPORT: 'dbImport',
  EXPORT: 'dbExport',
  EXPORT_APPOINTMENTS: 'assessment_centres/centre/appointments/export',
  GET_SUMMARY_LISTING: 'assessment_centres',
  APPOINTMENT: 'assessment_centres/centre/appointments/appointment',
  GET_APPOINTMENT_LISTING: 'assessment_centres/centre/appointments',
  DEL_APPOINTMENTS: 'assessment_centres/centre/appointments/delete',
  DEL_APPOINTMENT: 'assessment_centres/centre/appointments/appointment/delete'
} as const;

export type API_URI = typeof API_URIS[keyof typeof API_URIS];
