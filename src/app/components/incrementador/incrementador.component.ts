import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  // tslint:disable-next-line: no-input-rename
  @Input('valor') progreso = 80;
  @Input() btnClass = 'btn-primary';


  // tslint:disable-next-line: no-output-rename
  @Output('valor') valorSalida: EventEmitter< number > = new EventEmitter();


  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // get getPorcentaje(): string {
  //   return `${ this.progreso }%`;
  // }


  cambiarValor( valor: number ): number {

    // if (this.progreso >= 100 && valor >= 0){
    if (this.progreso + valor >= 100){
      this.valorSalida.emit(100);
      return this.progreso = 100;

    }else if (this.progreso + valor <= 0){
    // }else if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;

    }else{
      this.valorSalida.emit(this.progreso + valor);
      this.progreso = this.progreso + valor;
    }
  }

  onChange(valor: number): void {
    // this.progreso = valor;
    // console.log(valor);
    if( valor >= 100 ){
      valor = 100;
      this.valorSalida.emit(valor);
    }else if( valor < 0 || valor === null) {
      valor = 0;
      this.valorSalida.emit(valor);
    }else{
      this.valorSalida.emit(valor);
    }
  }
}
