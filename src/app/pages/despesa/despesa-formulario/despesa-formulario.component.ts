import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Despesa } from '../models/Despesa';
import { DespesaServices } from '../services/despesa.services';

@Component({
  selector: 'app-despesa-formulario',
  templateUrl: './despesa-formulario.component.html',
  styleUrls: ['./despesa-formulario.component.css']
})
export class DespesaFormularioComponent implements OnInit {

  despesa: Despesa;
  despesaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private despesaService: DespesaServices) { }

  ngOnInit(): void {
    this.despesaForm = this.fb.group({
      dataCompra: [''],
      loja: [''],
      produto: [''],
      valor: [''],
      formaPagamento: [''],
      parcela: [''],
      dataPagamento: [''],
    });
  }

  enviarDespesa() {
    this.createDespesa();
  }

  protected createDespesa(){
    this.despesa = Despesa.fromJson(this.despesaForm.value);
    console.log(this.despesa);
    this.despesaService.adicionar(this.despesa)
      .subscribe(
        sucesso => { this.processarSucesso(sucesso) },
        falha => { this.processarFalha(falha) }
      )
  }

  processarSucesso(response: any) {
    this.despesaForm.reset();
  }

  processarFalha(fail: any){
    console.log('Error despesas Adicionar')
    console.log(fail.error.errors);
  }


}
