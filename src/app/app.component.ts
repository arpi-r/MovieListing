import { Component, OnInit, Input, ChangeDetectionStrategy, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'movie-listings';

  current = 1;
  prevexists = false;

  source = "https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70&&page=";
  search_src = "https://api.themoviedb.org/4/search/movie?api_key=dea94f82d808e85759059b08ab481c70&query="
  final = [];

  searchText = '';

  issearch = false;
  prevfin = [];
  prevcur = 1;

  info = "";

  constructor(){
    var data = this.httpGet(this.source + this.current.toString());
    this.final = JSON.parse(data).results;
    this.prevfin = this.final;
    this.get_full_list();
  }

  ngOnInit(): void {
  }

  httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  prev(){
    if(this.issearch){
      this.issearch = false;
      this.current = this.prevcur;
      this.final = this.prevfin;
      this.info = "";
      return;
    }

    if (!this.prevexists){
      console.log("do nothing");
      return;
    }

    this.current = this.current - 1;
    var data = this.httpGet(this.source + this.current.toString());
    this.final = JSON.parse(data).results;

    if (this.current == 1){
      this.prevexists = false;
    }

    console.log(this.final[0].title);

  }

  next(){
    if(this.issearch){
      this.issearch = false;
      this.current = this.prevcur;
      this.final = this.prevfin;
      this.info = "";
      return;
    }

    this.prevexists = true;
    this.current = this.current + 1;
    var data = this.httpGet(this.source + this.current.toString());
    var temp = JSON.parse(data).results;
    if (temp.length == 0){
      this.current = this.current - 1;
      console.log("do nothing");
      return;
    }

    this.final = temp;

    console.log(this.final[0].title);
  }

  full_list = []

  search(){

    if(!this.issearch){
      this.issearch = true;
      this.prevcur = this.current;
      this.prevfin = this.final;
    }

    var s = this.searchText;
    console.log(s);
    if (s == null){
        return;
    }

    var data = this.httpGet(this.search_src + s);
    var temp = JSON.parse(data).results;

    if(temp.length == 0){
      console.log("do nothing");
      return;
    }

    this.final = temp;

    this.info = "All results displayed! Pressing next or previous will result in resetting to state before search!";

    console.log(this.final[0].title);
  }

  get_full_list(){
    var i = 1;
    var data = this.httpGet(this.source + i.toString());
    var temp = JSON.parse(data).results;

    while(temp.length != 0){
      this.full_list.concat(temp);
      i = i + 1;
      data = this.httpGet(this.source + i.toString());
      temp = JSON.parse(data).results;
    }

    console.log(this.full_list);
  }

}
