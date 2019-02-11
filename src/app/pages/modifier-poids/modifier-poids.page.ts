import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/data/firestore.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifier-poids',
  templateUrl: './modifier-poids.page.html',
  styleUrls: ['./modifier-poids.page.scss'],
})
export class ModifierPoidsPage implements OnInit {
  poidsForm: FormGroup;
  constructor(private router: Router, private firestoreService: FirestoreService, public formBuilder: FormBuilder) {
    this.poidsForm = this.formBuilder.group({
      'poids': [null, Validators.required]
    });
  }

  updatePoids() {
    this.firestoreService.updatePoids(this.poidsForm.value.poids);

    this.router.navigateByUrl('tabs/tab3');
  }

  ngOnInit() {
  }

}
