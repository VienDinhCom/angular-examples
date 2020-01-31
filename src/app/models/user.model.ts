export interface User {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  expiryDate: Date;
  localId: string;
  registered?: boolean;
}
