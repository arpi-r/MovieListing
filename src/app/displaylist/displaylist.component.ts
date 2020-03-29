import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaylistComponent implements OnInit {

  constructor() { 
    var data = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
    var results = JSON.parse(data)
    console.log(results.results[0].title);
  }

  httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  ngOnInit(): void {
  }

  p: number = 1;

  games = 
  [
    {
        "id": "1",
        "name": "DOTA 2",
        "genre": "Strategy"
    },
    {
        "id": "2",
        "name": "AOE 3",
        "genre": "Strategy"
    },
    {
        "id": "3",
        "name": "GTA 5",
        "genre": "RPG"
    },
    {
        "id": "4",
        "name": "Far Cry 3",
        "genre": "Action"
    },
    {
        "id": "5",
        "name": "GTA San Andreas",
        "genre": "RPG"
    },
    {
        "id": "6",
        "name": "Hitman",
        "genre": "Action"
    },
    {
        "id": "7",
        "name": "NFS MW",
        "genre": "Sport"
    }, {
        "id": "8",
        "name": "Fifa 16",
        "genre": "Sport"

    }, {
        "id": "9",
        "name": "NFS Sen 2",
        "genre": "Sport"

    }, {
        "id": "10",
        "name": "Witcher Assasins on King",
        "genre": "Adventure"
    }

  ];

  data = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
  results = JSON.parse(this.data).results;

}
