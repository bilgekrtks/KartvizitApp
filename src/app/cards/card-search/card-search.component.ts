import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {

  constructor(private cardService:CardsService) { }
 
  
search(searchText:string){
searchText=searchText.toLowerCase()
this.cardService.filteredCard=this.cardService.cards.filter((card:Card)=>{
return card.title.toLowerCase().indexOf(searchText)>-1 || (card.name&&card.name.toLowerCase().indexOf(searchText)>-1)
})
  }

}
