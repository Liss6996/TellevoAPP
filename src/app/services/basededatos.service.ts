import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(private firestore: AngularFirestore) { } //firestore función que permite editar la BBDD

    createDoc(data: any, path: string) {
        const collection = this.firestore.collection(path); //apunto a una colección
        return collection.add(data);
    }

    getDoc(path: string, id: string) {
        const collection = this.firestore.collection(path);
        return collection.doc(id).valueChanges();
    }

    deleteDoc(path: string, id: string) {
        const coleccion = this.firestore.collection(path);
        return coleccion.doc(id).delete();
    }

    updateDoc(data: any, path: string, id: string) {
        const coleccion = this.firestore.collection(path);
        return coleccion.doc(id).update(data);
    }

    getCollection(path: string) {
        const coleccion = this.firestore.collection(path);
        return coleccion.valueChanges();
    };

}
