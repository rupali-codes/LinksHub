import admin from 'firebase-admin'
import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { serviceAccount } from '../service-account'

const firebaseAdminConfig = {
  credential: cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://linkshub-3c1b9-default-rtdb.firebaseio.com',
}

export function customInitApp() {
  if (!getApps().length) {
    initializeApp(firebaseAdminConfig)
  }
}
