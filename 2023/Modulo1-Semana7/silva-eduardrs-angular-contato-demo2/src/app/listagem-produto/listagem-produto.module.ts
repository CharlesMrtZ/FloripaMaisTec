import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ListagemProdutoComponent } from './listagem-produto.component';
import { ListagemProdutoRoutingModule } from './listagem-produto-routing.module';
import { ProdutosService } from '../shared/services/produtos.service';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { Routes } from '@angular/router';


@NgModule({
  imports: [CommonModule, ListagemProdutoRoutingModule, FormsModule],
  providers: [ProdutosService],
  declarations: [ListagemProdutoComponent, DetalheProdutoComponent],
})
export class ListagemProdutoModule {}
