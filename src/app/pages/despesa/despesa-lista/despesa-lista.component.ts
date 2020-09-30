import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Despesa } from '../models/Despesa';
import { DespesaServices } from '../services/despesa.services';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit, OnDestroy {

  public despesas: Despesa[];
  subscription: Subscription;

  constructor(private despesaService: DespesaServices) {
  }

  ngOnInit(): void {
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.buscarDespesas());
  }

  buscarDespesas() {
    this.despesaService.obterTodos()
      .subscribe(
        despesas => this.despesas = despesas,
        error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
