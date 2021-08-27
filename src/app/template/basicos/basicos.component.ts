import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX',
    precio: 1,
    existencias: 1
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid 
           && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched
           && this.miFormulario?.controls.precio?.value < 0;
  }
  
  // guardar( miFormulario:NgForm ){
  guardar(){
    // console.log(this.miFormulario);
    console.log('posteo correcto!');

    this.miFormulario.resetForm({
      producto: 'default',
      precio: 0,
      existencias: 0
    });
    

    // if(this.miFormulario.controls.precio.value < 0){
    //   console.log('No posteado');
    //   return;
      
    // }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
