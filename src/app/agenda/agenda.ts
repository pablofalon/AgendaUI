import {IHistory} from '../history/history'

export interface IAgenda{    
    userId:number,
    userName:string,
    histories: IHistory[]
}