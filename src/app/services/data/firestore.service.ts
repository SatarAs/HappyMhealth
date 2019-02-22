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
import {Midi} from '../../models/midi.interface';
import {Soir} from '../../models/soir.interface';
import {Time} from '@angular/common';

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

    getExerciceMoyen() {
        return this.firestore.collection('SportMoyen');
    }

    getExerciceIntense () {
        return this.firestore.collection('SportIntense');
    }

    getMidi(): AngularFirestoreCollection<Midi> {
        return this.firestore.collection('Midi');
    }

    getSoir(): AngularFirestoreCollection<Soir> {
        return this.firestore.collection('Soir');
    }

    updatePoids(poids: String) {
        const id = this.auth.getId();

        return this.firestore.doc(`User/${id}`).update({poids : poids});
    }

    updateTaille(taille: String) {
        const id = this.auth.getId();

        return this.firestore.doc(`User/${id}`).update({taille : taille});
    }

    getFavoris() {
        const email = this.auth.getEmail();

        return this.firestore.collection('Favoris', ref => ref.where('email', '==', email)).valueChanges();
    }

    ajoutGlycemie( date: Date, email: String, heure: Time, taux: String ) {
        const id = this.firestore.createId();

        return this.firestore.doc(`Glycemie/${id}`).set({
            id, date, email , heure, taux
        });
    }

    getGlycemie() {
        return this.firestore.collection('Glycemie', ref => ref.where('email', '==', this.auth.getEmail()).limit(5)).valueChanges();
    }

    getGlycemieFull() {
        return this.firestore.collection('Glycemie', ref => ref.where('email', '==', this.auth.getEmail())).valueChanges();
    }








}
