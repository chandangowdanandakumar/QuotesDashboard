import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) { }
  getAllQuotes(){
    return this.http.get('http://127.0.0.1:8000/suitsapi/')
  }
  getQuote(id:any){
    return this.http.get('http://127.0.0.1:8000/suitsapi/'+JSON.stringify(id))
  }
  addQuote(body:any){
    return this.http.post('http://localhost:8000/suitsapi/addquote/',body=body)
  }
  deleteQuote(id:any){ 
    return this.http.delete('http://127.0.0.1:8000/suitsapi/'+JSON.stringify(id))
  }
}
