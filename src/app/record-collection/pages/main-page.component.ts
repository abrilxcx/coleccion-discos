import { Component } from '@angular/core';
import { Record } from '../interfaces/record.interface';

@Component({
  selector: 'coleccion-discos-main',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public recordsMain: Record[] = [
    {
      name: 'Fijación Oral Vol.1',
      by: 'Shakira',
      songs: 12,
      release_date: 2005
    },{
    name: 'Dónde están los ladrones?',
    by: 'Shakira',
    songs: 11,
    release_date: 1998
  },{
    name: 'Pies Descalzos',
    by: 'Shakira',
    songs: 11,
    release_date: 1995
  }]

  onNewRecordMain( record: Record ): void {
    this.recordsMain.push( record );
  }

  onDeleteRecordMain( index: number ): void {
    console.log({index});

  }

}
