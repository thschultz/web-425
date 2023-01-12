// import component and OnInit from angular core
import { Component, OnInit } from '@angular/core';

// create a class for composers
export default class Composer {
  fullName: string;
  genre: string;


  // constructor
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

  // method to output the person's details
  toString() {
    console.log(
      `Full Name: ${this.fullName}\nGenre: ${this.genre}`
    );
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // create array of composers
    this.composers = [
      new Composer('Hans Zimmer', 'Classical'),
      new Composer('John Williams', 'Classical'),
      new Composer('Danny Elfman', 'Classical'),
      new Composer('Ennio Morricone', 'Classical'),
      new Composer('Howard Shore', 'Classical'),
    ];
  }

  ngOnInit(): void { }
}
