import { DatePipe } from "@angular/common";


export interface task{
  id:string,
  description:string,
  name:string,
  deadline:string,
  tag:priority,
  iscompleted:boolean,
 }
export type priority = 'high' | 'medium' | 'low';
