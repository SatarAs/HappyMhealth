import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-matin',
  templateUrl: './matin.page.html',
  styleUrls: ['./matin.page.scss'],
})
export class MatinPage implements OnInit {

  public matinList;
  constructor(public router: Router, private firestoreService: FirestoreService, public firestore: AngularFirestore) { }

  ngOnInit() {
    this.matinList = this.firestoreService.getMatin().valueChanges();
  }

}
