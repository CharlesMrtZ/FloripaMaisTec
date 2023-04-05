import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  slip: { id: number; advice: string; } | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = 'https://api.adviceslip.com/advice';
    this.http.get<{ slip: { id: number, advice: string }}>(url).subscribe(retorno => {
      this.slip = retorno.slip;
    });
  }

}
