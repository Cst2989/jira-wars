import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-team',
    templateUrl: './teams.template.html',
    styleUrls: ['./team.scss']
})


export class TeamsComponent implements OnInit {

    teams;
    constructor(public service: AppService) {

    }

    ngOnInit() {
        this.service.getTeams().subscribe(d => {
            this.teams = d;
        });
    }
}
