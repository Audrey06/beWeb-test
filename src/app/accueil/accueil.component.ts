import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.scss' ]
})
export class AccueilComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  hide() {
    $('#proot').slideToggle('slow');
  }
}
