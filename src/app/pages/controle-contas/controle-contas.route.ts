import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ControleContasAppComponent} from './controle-contas.app.component';
import { ControleContasListaComponent } from './controle-contas-lista/controle-contas-lista.component';
import { ControleContasFormularioComponent } from './controle-contas-formulario/controle-contas-formulario.component';

const controleContasRouterConfig: Routes = [
    {
        path: '', component: ControleContasAppComponent,
        children: [
            { path: 'listar', component: ControleContasListaComponent },
            { path: 'cadastrar', component: ControleContasFormularioComponent },
            { path: 'editar', component: ControleContasFormularioComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(controleContasRouterConfig)
    ],
    exports: [RouterModule]
})
export class ControleContasRoutingModule { }