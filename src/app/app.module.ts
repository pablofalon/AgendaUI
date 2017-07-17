import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryAddComponent } from './history/history-add.component';
import { HistoryListComponent } from './history/history-list.component';
import { HistoryDetailsComponent } from './history/history-details.component';

import { HistoryService } from './shared/history.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryAddComponent,
    HistoryListComponent,
    HistoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    RouterModule.forRoot([
      {path: 'histories',component:HistoryListComponent},
      {path: 'new',component:HistoryAddComponent},
      {path: 'history/:id',component:HistoryDetailsComponent}
    ]) 
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
