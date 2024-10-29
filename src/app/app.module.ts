import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // For two-way data binding with ngModel
import { HttpClientModule } from '@angular/common/http';  // To enable HTTP requests
import { AppComponent } from './app.component';
import { ChatbotWidgetComponent } from './chatbot-widget/chatbot-widget.component';  // Import the widget component
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ChatbotWidgetComponent ,
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,   // For running the Angular app in a browser
    FormsModule,     
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
 
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
