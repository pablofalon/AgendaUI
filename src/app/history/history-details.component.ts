import {Component,OnInit} from '@angular/core';
import {HistoryService} from '../shared/history.service';

import {IHistory} from './history'

@Component({
  selector:'history-details',
  templateUrl:'./history-details.component.html'
})

export class HistoryDetailsComponent implements OnInit{
      history:IHistory
      constructor(private _service:HistoryService){

      }
      ngOnInit(){
           this._service.getHistory()
        .subscribe(history=>this.history=history);
      }

}