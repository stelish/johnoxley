import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles:any = [
    {
      title: 'Accommodation',
      copy: 'The park has a number of cabins, ranging from luxury to budget.',
      position: 'right'
    },
    {
      title: 'Hospitality',
      copy: 'Your Hosts Michael and Fiona are long term locals, who have a wealth of knowledge of the local area.',
      position: 'left'
    },
    {
      title: 'Ammenities',
      copy: 'With over 50 powered sites ("Drive Through") and 30 tent sites, John Oxley is perfect for an overnight stay or a week long visit .',
      position: 'right'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
