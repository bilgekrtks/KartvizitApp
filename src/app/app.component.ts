import { DOCUMENT } from '@angular/common';
import { Component , Inject, OnInit, Renderer2,RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'KartvizitApp';
 
  ngOnInit(): void {
   
 
  }

}
