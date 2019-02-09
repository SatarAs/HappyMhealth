import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FirestoreService } from '../../services/data/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-collation-soir',
  templateUrl: './collation-soir.page.html',
  styleUrls: ['./collation-soir.page.scss'],
})
export class CollationSoirPage implements OnInit {
  public collation;
  collationForm: FormGroup;
  constructor(public router: Router, private firestoreService: FirestoreService, public firestore: AngularFirestore, public formBuider: FormBuilder) {
    this.collationForm = this.formBuider.group({
      'taux': [null, Validators.required]
    });
  }

  getResult() {
    const taux = this.collationForm.value.taux;

    if (taux < 7 && taux != null) {
      this.collation = this.firestoreService.getCollationInf7().valueChanges();
    } else if (taux >= 7 && taux < 10 && taux != null ) {
      this.collation = this.firestoreService.getCollation710().valueChanges();
    } else {
      this.collation = null;
    }
  }



  ngOnInit() {
  }

}
