import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[];
  @Input() cols: any[];
  deleteIconClass: string = 'fa fa-trash-o';

  constructor(private baseService: BaseService) {

    setInterval( () => {
      this.deleteIconClass = this.deleteIconClass == 'fa fa-trash-o' ? 'fa fa-trash' : 'fa fa-trash-o';
    },1000);
   }


  ngOnInit(): void {
    
  }

  onUpdate($event): void{
    alert("Clicked on update.");
  }

  onDelete( $event): void{
    alert(`Clicked on ${$event}.`);
  }
}
