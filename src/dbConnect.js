// line 1 - 10 always the same to connect to firebase
import { initializeApp, cert, getApps } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

import ServiceAccount from "../secrets.js";

export default function sbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(ServiceAccount)
        })
    }
return getFirestore()
}
