import admin from "firebase-admin"
import { initializeApp,cert,getApps } from "firebase-admin/app"
import {firebaseConfig} from "../service-account.ts";

const firebaseAdminConfig = {
    credential: cert(firebaseConfig as admin.ServiceAccount)
}

export function customInitApp() {
    if(!getApps().length) {
        initializeApp(firebaseAdminConfig)
    }
}