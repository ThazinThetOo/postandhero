import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'post';
  // data : postInfo[] = [];
  // title = 'My Heros';

  // heroes: any[] = [
  //   { id: 11, name: 'Dr Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ];
  // selectedHero?: any;

  constructor(private appService: AppService) {}
  ngOnInit(): void {
    // this.appService.getPosts()
    // .subscribe(res => {
    //   // console.log(JSON.stringify(res));
    //   this.data = res;
    //   // console.log('data =>' + JSON.stringify(res));
    // })
  }
  // onSelect(hero: any): void {
  //   // alert(hero)
  //   this.selectedHero = hero;
  //   // this.selectedHero.id = hero.id;
  //   // this.selectedHeroName.name = hero.name;
  // }
  
}

// export interface postInfo {
//   id: any;
//   userId: string;
//   title: string;
//   body: string;
//   invoices: any;
// }
