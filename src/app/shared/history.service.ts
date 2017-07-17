import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IHistory } from '../history/history'
import { IAgenda } from '../agenda/agenda'

@Injectable()
export class HistoryService{
 private historyById="https://localhost:44300/History/1";
 private completeAgendaURL="https://localhost:44300/Agenda/pablofalon";
 constructor(private _http:Http){

 }

 getHistory():Observable<IHistory>{
     return this._http.get(this.historyById)
     .map((response:Response)=><IHistory>response.json())
     .do(data=>console.log('All: '+ JSON.stringify(data)))
    // .catch(this.handleError);
     
 }

 getAgenda():Observable<IAgenda>{
     return this._http.get(this.completeAgendaURL)
     .map((response:Response)=><IAgenda>response.json())
     .do(data=>console.log('All: '+ JSON.stringify(data)))
    // .catch(this.handleError);
     
 }
  

 private handleError(error:Response){
    console.error(error);
   // return Observable.throw(error.json().error||'Server Error')
 }
}