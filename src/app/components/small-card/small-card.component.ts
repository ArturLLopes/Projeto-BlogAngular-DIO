import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})


export class SmallCardComponent implements OnInit {

  @Input()
  cardTitle:string=""
  @Input()
  photoCover:string=""
  @Input()
  photoCoversc: string = '';
  @Input()
  cardTitlesc: string = '';
  @Input()
  cardDescriptionsc: string = '';
  @Input()
  Id:string ="0"
  



constructor(){}

  ngOnInit(): void {

  }

}
