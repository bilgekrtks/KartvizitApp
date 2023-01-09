import { Component, OnInit } from '@angular/core';
import {  Subject, takeUntil } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sidebarActive$: Subject<{ data: any }> = new Subject<{ data: any}>();
  sidebarData: any;



  tables!: Card[]
  cols!: any[];
  virtualCards!:Card[]
  protected unSubscribe$ = new Subject<void>();
  constructor(private service: CardsService  ) { }

  ngOnInit() {
    // this.tables = Array.from({length: 20}).map(() => this.service.getTables())
    // this.virtualCards = Array.from({length: 20});
    this.service.getTables().pipe(takeUntil(this.unSubscribe$)).subscribe(items =>
      this.tables = items)
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'name', header: 'Name' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' }

    ]
  }
  Details(){
    
    this.service.getTables().pipe(takeUntil(this.unSubscribe$)).subscribe( 
      ()=>{ this.sidebarActive$.next({
        data:  this.tables
      })
    })
  }
}


