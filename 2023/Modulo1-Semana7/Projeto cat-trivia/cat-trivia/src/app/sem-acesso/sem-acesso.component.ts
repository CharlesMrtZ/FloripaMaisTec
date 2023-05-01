import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem-acesso',
  templateUrl: './sem-acesso.component.html',
  styleUrls: ['./sem-acesso.component.css']
})
export class SemAcessoComponent implements OnInit{
  slip: { id: number; advice: string; } | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = 'https://api.adviceslip.com/advice';
    this.http.get<{ slip: { id: number, advice: string }}>(url).subscribe(retorno => {
      this.slip = retorno.slip;
    });
  }

  dialogOpen(dialog: any){
    dialog.showModal();
    // return dialog
  }
  dialogClose(dialog: any){
    dialog.close();
    // return dialog
  }
}
