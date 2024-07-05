export enum OrderStatus {
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Success = 'SUCCESS',
  Failed = 'FAILED',
  Deleted = 'DELETED'
};

export enum OrderType {
  Diagnostics = 'DIAGNOSTICS',
  Dismantling = 'DISMANTLING',
  Installation = 'INSTALLATION',
  Verification = 'VERIFICATION',
};
