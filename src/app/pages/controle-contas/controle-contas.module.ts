import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ControleContasRoutingModule } from './controle-contas.route';
import { ControleContasAppComponent } from './controle-contas.app.component';
import { ControleContasListaComponent } from './controle-contas-lista/controle-contas-lista.component';
import { ControleContasFormularioComponent } from './controle-contas-formulario/controle-contas-formulario.component';

@NgModule({
  declarations: [
    ControleContasAppComponent,
    ControleContasListaComponent,
    ControleContasFormularioComponent,
  ],
  imports: [
    CommonModule,
    ControleContasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class ControleContasModule { }
