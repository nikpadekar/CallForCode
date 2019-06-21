import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HelpinghandService {

  constructor(private httpclient :  HttpClient  ) { }

  getData(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/album/1/photos')
    } 

  postnewData(userdata): Observable<any> {
    return this.httpclient.post('https://jsonplaceholder.typicode.com/album/1/photos', userdata)
    } 
  getWatsonResp(obj): Observable<any> {
    console.log(obj.value);
    var data = {message: (obj.value).toString()};
    console.log(data);
    return this.httpclient.post('http://localhost/watson/chatbot.php',data)
  } 
}