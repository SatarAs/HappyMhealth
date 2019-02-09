import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../services/data/firestore.service';

@Component({
  selector: 'app-soir',
  templateUrl: './soir.page.html',
  styleUrls: ['./soir.page.scss'],
})
export class SoirPage implements OnInit {
  public soirList;
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.soirList = this.firestoreService.getSoir().valueChanges();
  }

}
