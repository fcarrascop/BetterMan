import  { doc, getDoc } from "firebase/firestore";
import db from "../config/firebase";

const docRef = doc(db, "Items", "1");
const docSnap = await getDoc(docRef);