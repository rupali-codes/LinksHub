import admin from "firebase-admin"
import { initializeApp,cert,getApps } from "firebase-admin/app"
import {getAuth} from "firebase-admin/auth"
import serviceAccountJson from '../service-account.json'

const serviceAccount = serviceAccountJson as admin.ServiceAccount 

const firebaseAdminConfig = {
    credential: cert(serviceAccount)
}
console.log('Before Firebase initialization');
// const adminApp = getApps().length ? getApps()[0] : initializeApp(firebaseAdminConfig);
console.log('After Firebase initialization');
const adminApp = initializeApp(firebaseAdminConfig);

export const adminAuth = getAuth(adminApp)