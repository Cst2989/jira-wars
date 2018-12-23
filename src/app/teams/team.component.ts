import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-team',
    templateUrl: './team.template.html',
    styleUrls: ['./team.scss']
})


export class TeamComponent implements OnInit {

    idObserver;
    teamId;
    issues;
    isLoaded = false;
    offers;
    teams = [
        {
            name: 'Product',
            id: 1,
        },
        {
            name: 'Logistics',
            id: 3,
        },
        {
            name: 'Core',
            id: 7,
        },
        {
            name: 'Gamma',
            id: 6,
        },
        {
            name: 'Alpha',
            id: 4,

        },
        {
            name: 'Omega',
            id: 5,
        },
        {
            name: 'Delta',
            id: 8,
        },
        {
            name: 'Sigma',
            id: 2,
        },

    ];
    constructor(public service: AppService,
                private route: ActivatedRoute) {

    }


    ngOnInit() {
        this.idObserver = this.route.params.pipe(
            mergeMap(params => {
                this.teamId = params['id'];
                return this.service.getIssues();
            })
        );
        this.idObserver.subscribe(r => {
            this.issues = r.issues;
            this.isLoaded = true;
        });

        this.service.getOffers().subscribe(d => {
            this.offers = d;
        })
    }

    askForHelp(team, bug) {
       /* this.service.askHelp(team, bug, this.teamId).subscribe(r => {

        });
        */

       this.issues.forEach(i => {
           if (i.key === bug) {
               i.key = 'OA';
           }
       });
    }
}
