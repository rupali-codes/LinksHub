import admin from "firebase-admin"
import { initializeApp,cert,getApps } from "firebase-admin/app"
import {getAuth} from "firebase-admin/auth"
import serviceAccountJson from '../service-account.json'

const serviceAccount = serviceAccountJson as admin.ServiceAccount 

const firebaseAdminConfig = {
    credential: cert(serviceAccount)
}

export function customInitApp() {
    if(!getApps().length) {
        initializeApp(firebaseAdminConfig)
    }
}