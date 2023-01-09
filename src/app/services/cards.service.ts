import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {



  filteredCard!: Card[]
  cards!: Card[];

  constructor(@Inject('apiUrl') private apiUrl: string,
    private http: HttpClient) { }
  // ayrı servislerede aynı api kullanılırsa app module providers ekle bunu yap sonra


  getCards() {
    this.http.get<Card[]>(this.apiUrl + '/cards').subscribe((res: Card[]) => {
      this.cards = this.filteredCard = res
    })
  }

  addCard(card: Card) {
    return this.http.post(this.apiUrl + '/cards', card)
  }

  updateCard(card: Card, cardId: number) {
    return this.http.put(this.apiUrl + '/cards/' + cardId, card)
  }

  deleteCard(cardId: number) {
    return this.http.delete(this.apiUrl + '/cards/' + cardId)
  }
  getTables(){
    
return this.http.get<Card[]>(this.apiUrl + '/cards')
}
}