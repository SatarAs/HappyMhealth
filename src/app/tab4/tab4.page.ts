import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Pedometer, IPedometerData } from '@ionic-native/pedometer';

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html',
    styleUrls: ['tab4.page.css']

})
export class Tab4Page {
    public data: IPedometerData = null;
    public time;

    constructor () {
        Pedometer.startPedometerUpdates()
            .subscribe((data: IPedometerData) => {
                this.data = data;
            });

        if(this.data != null) {
            this.time = this.data.endDate - this.data.startDate;
        }
    }

}