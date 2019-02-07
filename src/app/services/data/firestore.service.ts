import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Aliment} from '../../models/aliment.interface';
import {  AngularFirestoreCollection} from 'angularfire2/firestore';
import {Categorie} from '../../models/categorie.interface';
import {Matin} from '../../models/matin.interface';
import {CollationInf7} from '../../models/collationInf7.interface';
import {Collation710} from '../../models/collation7&10.interface';
import {AuthService} from '../auth.service';
import {User} from '../../models/user.interface';
import {ExerciceFaible} from '../../models/exerciceFaible.interface';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(public firestore: AngularFirestore, private auth: AuthService) { }

    ajoutAliment(categorie: String, label: String, IG: any): Promise<void> {
        const id = this.firestore.createId();

        return this.firestore.doc(`Aliment/${id}`).set({
            id,
            categorie,
            label,
            IG
        });
    }

    getCategoryList(): AngularFirestoreCollection<Categorie> {
        return this.firestore.collection(`Categorie`);
    }

    getAlimentList(label: String, categorie: String): AngularFirestoreCollection<Aliment> {
        return this.firestore.collection(`Aliment`, ref => ref.where('label', '==', label).where('categorie', '==', categorie));
    }

    ajoutFavoris(email: String, label: String, IG: String): Promise<void> {
        const id = this.firestore.createId();

        return this.firestore.doc(`Favoris/${id}`).set({
            id,
            email,
            label,
            IG
        });
    }

    getMatin(): AngularFirestoreCollection<Matin> {
        return this.firestore.collection('Matin');
    }

    getCollationInf7(): AngularFirestoreCollection<CollationInf7> {
        return this.firestore.collection('CollationInf7');
    }

    getCollation710(): AngularFirestoreCollection<Collation710> {
        return this.firestore.collection('Collation7&10');
    }

    ajoutUser(nom: String, prenom: String, age: Date, poids: String, taille: String) {
        const id = this.auth.getId();
        const email = this.auth.getEmail();

        return this.firestore.doc(`User/${id}`).set({
            nom, prenom, age, email, poids, taille
        });
    }

    getExerciceFaible(): AngularFirestoreCollection<ExerciceFaible> {
        return this.firestore.collection('SportFaible');
    }








}
