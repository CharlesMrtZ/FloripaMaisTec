import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url: string = 'https://cat-fact.herokuapp.com';

  catFacts: any = [{ _id: '', text: 'Press any button below' }];

  imgLogic: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  showCatFacts(): void {
    this.http.get<any>(`${this.url}/facts`).subscribe((retorno) => {
      this.catFacts = retorno.map((f: any) => (this.catFacts = f));
    });
  }

  showCatImg(): void {
    if (this.imgLogic === false) {
      this.showCatFacts();
      console.log('IMG');
      this.imgLogic = true;
    } else {
      this.catFacts = [{ _id: '', text: 'Press any button below' }];
      this.imgLogic = false;
    }
  }

  showCatGif(): void {
    if (this.imgLogic === false) {
      this.showCatFacts();
      console.log('GIF');
      this.imgLogic = true;
    } else {
      this.catFacts = [{ _id: '', text: 'Press any button below' }];
      this.imgLogic = false;
    }
  }
}
