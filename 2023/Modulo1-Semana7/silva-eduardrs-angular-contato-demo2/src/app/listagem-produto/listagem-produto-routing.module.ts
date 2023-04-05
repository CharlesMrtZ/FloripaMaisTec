import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ListagemProdutoComponent } from './listagem-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemProdutoComponent,
  },
  {
    path: 'detalhe-produto/:idProduto',
    component: DetalheProdutoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemProdutoRoutingModule {}
