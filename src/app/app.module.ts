import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService} from './app.service';
import { TeamComponent } from './teams/team.component';
import { TeamsComponent } from './teams/teams.component';
@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
