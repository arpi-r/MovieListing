import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  search_src = "https://api.themoviedb.org/4/search/movie?api_key=dea94f82d808e85759059b08ab481c70&query="

  httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    
    var data = this.httpGet(this.search_src + searchText);
    var temp = JSON.parse(data).results;

    return temp;
   }
}
