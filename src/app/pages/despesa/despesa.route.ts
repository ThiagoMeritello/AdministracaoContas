import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaAppComponent} from './despesa.app.component';
import { DespesaListaComponent } from './despesa-lista/despesa-lista.component';
import { DespesaFormularioComponent } from './despesa-formulario/despesa-formulario.component';

const despesaRouterConfig: Routes = [
    {
        path: '', component: DespesaAppComponent,
        children: [
            { path: 'listar', component: DespesaListaComponent },
            { path: 'cadastrar', component: DespesaFormularioComponent },
            { path: 'editar', component: DespesaFormularioComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(despesaRouterConfig)
    ],
    exports: [RouterModule]
})
export class DespesaRoutingModule { }