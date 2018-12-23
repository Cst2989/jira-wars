import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './teams/team.component';
import { TeamsComponent } from './teams/teams.component';
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'teams/:id',
                component: TeamComponent,
            },
            {
                path: 'teams',
                component: TeamsComponent,
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
