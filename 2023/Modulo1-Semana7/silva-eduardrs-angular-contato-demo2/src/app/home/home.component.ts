import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(CardComponent) card: CardComponent;

  constructor(private router: Router) {}

  ngOnInit() {
    // console.log('card', this.card); 

  }
  ngAfterViewInit() {
    // console.log('card', this.card)
  }

  clickCard(event = 'default'){
    console.log(event);
    if (event === 'Ver produtos'){
      this.router.navigate(['/listagem-produto'])
    } else {
      this.router.navigate([
          '/listagem-produto',
          'detalhe-produto',
          'sobre-nos'
        ])
    }

    
  }
}
