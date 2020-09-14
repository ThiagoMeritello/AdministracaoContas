import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { DespesaRoutingModule } from './despesa.route';
import { DespesaAppComponent } from './despesa.app.component';
import { DespesaListaComponent } from './despesa-lista/despesa-lista.component';
import { DespesaFormularioComponent } from './despesa-formulario/despesa-formulario.component';

@NgModule({
  declarations: [
    DespesaAppComponent,
    DespesaListaComponent,
    DespesaFormularioComponent,
  ],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class DespesaModule { }
