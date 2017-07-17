import {Component,OnInit} from '@angular/core';
import {HistoryService} from '../shared/history.service';

import {IHistory} from '../history/history';
import {IAgenda} from '../agenda/agenda';

@Component({
    selector:'history-list',
    templateUrl:'./history-list.component.html',
    styles:['./history-list.component.css']
})

export class HistoryListComponent implements OnInit{
agenda: IAgenda;

    constructor(private _service:HistoryService){}


    ngOnInit():void{
        this._service.getAgenda()
        .subscribe(agenda=>this.agenda=agenda);
    }
}