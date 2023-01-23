// WEB 425 Angular with TypeScript
// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2023', '#CodingWithAngular', '#ngOmaha'];

  // constructor
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // method to output the person's details
  toString() {
    console.log(
      `Full Name: ${this.fullName}\nFavorite Food: ${this.favoriteFood}\nFavorite Color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    // create a new person
    this.myProfile = new Person('Thomas Schultz', 'Buffalo Wings', 'Red');
    this.myProfile.toString();
  }

  ngOnInit(): void { }
}
