import { Component, EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() searchForm!: FormGroup;
  @Input() searchFormCollapsed!: boolean;
  @Input() searchActive!: boolean;
  @Output() searchButtonClicked: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() resetButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() ferButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchFormCollapsedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();



}
