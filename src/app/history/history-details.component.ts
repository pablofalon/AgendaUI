import {Component,OnInit} from '@angular/core';
import {HistoryService} from '../shared/history.service';
import {ActivatedRoute} from '@angular/router'

import {IHistory} from './history'

@Component({
  selector:'history-details',
  templateUrl:'./history-details.component.html'
})

export class HistoryDetailsComponent implements OnInit{
      history:IHistory
      id:number
      constructor(private _service:HistoryService,private _route:ActivatedRoute){
          this.id = +this._route.snapshot.params['id'];
      }
      ngOnInit(){
           this._service.getHistory(this.id)
        .subscribe(history=>this.history=history);
      }

}