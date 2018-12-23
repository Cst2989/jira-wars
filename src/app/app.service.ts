import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    /**
     * Load user profile
     * @returns {Observable<R>}
     */
    public getTeams(): Observable<any> {
        return this.http.get(`http://jira_wars.local-swarm.adoreme.com/api/teams`);
    }



    public getIssues(): Observable<any> {
        return this.http.get(`http://localhost:8082`);
    };

    public getOffers(): Observable<any> {
        return this.http.get(`http://jira_wars.local-swarm.adoreme.com/api/help_request/5`);
    };
}
