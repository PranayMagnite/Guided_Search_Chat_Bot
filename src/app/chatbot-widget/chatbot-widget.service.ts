import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatbotWidgetService {


  private apiUrl ='http://localhost:3000/api/guided-search';
  

  constructor(private http:HttpClient) { }


  sendMessage(messages: any[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, { messages });
  }




}
