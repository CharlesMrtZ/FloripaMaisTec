import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  /*
  loginFormModel: {nome: string, senha: string, confimarSenha: string} = {
    nome: '',
    senha: '',
    confimarSenha: ''
  }
  */

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.criarForm();
  }


  criarForm() {
    this.loginForm = new FormGroup({
      nome: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl(''),
    });
  }
  /*
  resetFormTemplate() {
    this.loginFormModel = {
      nome: '',
      senha: '',
      confimarSenha: '',
    }
  }
  */

  /*
  onSubmit() {
    if (this.loginFormModel.senha !== this.loginFormModel.confimarSenha){
      window.alert('erro')
    } else {
      window.alert('ok')
    }
  }
  */

  entrar() {
    if (this.loginForm?.value.senha !== this.loginForm?.value.confirmarSenha){
      window.alert('erro')
    } else {
      window.alert('ok')
    }
  }
  
}
