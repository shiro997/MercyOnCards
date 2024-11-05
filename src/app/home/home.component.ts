import { Component } from '@angular/core';
import { Card } from '../model/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  card1 : Card;
  card2 : Card;
  card3 : Card;
  card4 : Card;
  card5 : Card;
  card6 : Card;
  constructor(){
    this.card1={
      name: 'Beast Whisperer 0158',
      image: './assets/img/clu-158-beast-whisperer.jpg',
      price: '1.79',
      rarity: 'rare'
    }
    this.card2={
      name: 'Apothecary White 0001',
      image: './assets/img/Apothecary White-(Borderless)-0001.jpg',
      price: '2.59',
      rarity:'rare'
    }
    this.card3={
      name: 'Wrench (Borderless) 0007',
      image: './assets/img/Wrench-(borderless)-0007.jpg',
      price: '0.25',
      rarity: 'uncommon'
    }
    this.card4={
      name: 'Orzhov Signet 0225',
      image: './assets/img/Orzhov-Signet-0225.jpg',
      price: '0.25',
      rarity: 'common'
    }
    this.card5={
      name: 'Deadbridge Chant 0184',
      image: './assets/img/Deadbridge-Chant-0184.jpg',
      price: '0.69',
      rarity: 'mithyc'
    }
    this.card6={
      name: 'Beast Whisperer 0158',
      image: './assets/img/clu-158-beast-whisperer.jpg',
      price: '1.79',
      rarity: 'rare'
    }
  }
}
