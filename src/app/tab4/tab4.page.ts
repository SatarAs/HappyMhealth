import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html'

})
export class Tab4Page {
    constructor (private router: Router) {

    }

    goCollation() {
        this.router.navigateByUrl('tabs/collation-sport');
    }


}