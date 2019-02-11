import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/data/firestore.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifier-taille',
  templateUrl: './modifier-taille.page.html',
  styleUrls: ['./modifier-taille.page.scss'],
})
export class ModifierTaillePage implements OnInit {
  tailleForm: FormGroup;
  constructor(private router: Router, private firestoreService: FirestoreService, public formBuilder: FormBuilder) {
    this.tailleForm = this.formBuilder.group({
      'taille': [null, Validators.required]
    });
  }

  updateTaille() {
    this.firestoreService.updateTaille(this.tailleForm.value.taille);

    this.router.navigateByUrl('tabs/tab3');
  }

  ngOnInit() {
  }

}
