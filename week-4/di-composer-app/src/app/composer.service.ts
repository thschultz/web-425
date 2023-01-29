import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

// injectable
@Injectable({
  providedIn: 'root',
})

// export statement
export class ComposerService {

  composers: Array<IComposer>


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Hans Zimmer', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'John Williams', genre: 'Classical'
      },
      {
        composerId: 102, fullName: 'Danny Elfman', genre: 'Classical'
      },
      {
        composerId: 103, fullName: 'Ennio Morricone', genre: 'Classical'
      },
      {
        composerId: 104, fullName: 'Howard Shore', genre: 'Classical'
      },

    ]
  }

  getComposers() {
    return this.composers;
  }

  // get composer by id
  getComposer(composerId: number) {
    // loop through composers
    for (let composer of this.composers) {
      // if composerId matches, return composer
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    // if no match, return null
    return {} as IComposer;
  }
}
