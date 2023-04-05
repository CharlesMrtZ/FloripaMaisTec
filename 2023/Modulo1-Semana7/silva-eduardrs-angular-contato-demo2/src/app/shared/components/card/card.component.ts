import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() tituloCard: string;
  @Input() icone: string;
  @Output() cardSelecionado: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  clickCard(event) {
    console.log('foi clicado no ')
    this.cardSelecionado.emit(this.tituloCard);
  }

}