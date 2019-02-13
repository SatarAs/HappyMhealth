import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/data/firestore.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-sport-intense',
  templateUrl: './sport-intense.page.html',
  styleUrls: ['./sport-intense.page.scss'],
})
export class SportIntensePage implements OnInit {

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



    this.result2 = this.firestore.collection('SportIntense', ref => ref.where('label', '==', sport)).valueChanges();



  }



  ngOnInit() {
    this.sportList = this.firestoreService.getExerciceIntense().valueChanges();
  }

}
