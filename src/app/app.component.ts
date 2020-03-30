import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FilterPipe } from './filter.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'movie-listings';
  searchText;

  constructor() {
    var data = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
    var results = JSON.parse(data)
    console.log(results.results[0].title);
    // var searchText = document.getElementById("input1");
    // var searchText=document.getElementById("input1").nodeValue;
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
  data = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
  results = JSON.parse(this.data).results;
  // searchText = document.getElementById("input1").nodeValue;
  // final = FilterPipe.caller(this.results, this.searchText);

}
