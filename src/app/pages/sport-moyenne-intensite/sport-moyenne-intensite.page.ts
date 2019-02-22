import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/data/firestore.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-sport-moyenne-intensite',
  templateUrl: './sport-moyenne-intensite.page.html',
  styleUrls: ['./sport-moyenne-intensite.page.scss'],
})
export class SportMoyenneIntensitePage implements OnInit {

  public sportList;
  public result2;
  taux;
  sportForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private firestoreService: FirestoreService, public firestore: AngularFirestore) {
    this.sportForm = this.formBuilder.group({
      'sport': [null, Validators.required],
      'taux': [null, Validators.required]
    });


  }

  result() {
    const sport = this.sportForm.value.sport;



    this.result2 = this.firestore.collection('SportMoyen', ref => ref.where('label', '==', sport)).valueChanges();



  }



  ngOnInit() {
    this.sportList = this.firestoreService.getExerciceMoyen().valueChanges();
  }

}
