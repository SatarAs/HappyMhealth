import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../services/data/firestore.service';

@Component({
  selector: 'app-midi',
  templateUrl: './midi.page.html',
  styleUrls: ['./midi.page.scss'],
})
export class MidiPage implements OnInit {
  public midiList;
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.midiList = this.firestoreService.getMidi().valueChanges();
  }

}
