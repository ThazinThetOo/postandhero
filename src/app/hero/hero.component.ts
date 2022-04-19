import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  // styleUrls: ['./app.component.css']
})
export class HeroComponent {
  title = 'My Heros';

  heroes: any[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  selectedHero?: any;
  // selectedHeroName?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: any): void {
    // alert(hero)
    this.selectedHero = hero;
    // this.selectedHero.id = hero.id;
    // this.selectedHeroName.name = hero.name;
  }
}
