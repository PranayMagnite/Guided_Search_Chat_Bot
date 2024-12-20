import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChatbotWidgetService {


  private openAiApiUrl = environment.openAiApiUrl;
  private clientKeyUrl  = environment.clientKeyUrl;
  private clientMetaPromptUrl  = environment.clientMetaPromptUrl;
  private chatSummaryUrl = environment.ChatSummaryUrl; 

  constructor(private http:HttpClient) { }

  sendMessage(messages: any[]): Observable<any> {
    return this.http.post<any>(this.openAiApiUrl, { messages });
  }

  getSecretKey(clientId: String | undefined): Observable<any> {
    return this.http.post<any>(this.clientKeyUrl,{clientId});
  }

  getMetaPrompt(clientId: String | undefined, productName: String| undefined,productDetails: String| undefined, recommendedProduct: String|undefined): Observable<any> {
    const payload = {
      clientId,
      productName,
      productDetails,
      recommendedProduct

      // Add more parameters here as needed
    };
    return this.http.post<any>(this.clientMetaPromptUrl,payload);
  }

  getchatSummary(messages: any[]): Observable<any> {
    return this.http.post<any>(this.chatSummaryUrl,{messages});
  }


}
