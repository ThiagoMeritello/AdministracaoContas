import { Component, Injector, OnInit } from '@angular/core';
import { Despesa } from '../models/Despesa';
import { DespesaServices } from '../services/despesa.services';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit {

  public despesas: Despesa[]; 

  constructor(private despesaService: DespesaServices) { 
  }

  ngOnInit(): void {
    this.despesaService.obterTodos()
      .subscribe(
         despesas => this.despesas = despesas,
         error => console.log(error)        
      );
  }

}
