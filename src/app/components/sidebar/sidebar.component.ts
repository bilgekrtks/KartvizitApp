import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  cols!: any[];
  @Input() data!: Card;

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'name', header: 'Name' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' }

    ]
  }

}
