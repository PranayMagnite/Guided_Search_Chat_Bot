import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // For two-way data binding with ngModel
import { HttpClientModule } from '@angular/common/http';  // To enable HTTP requests
import { AppComponent } from './app.component';
import { ChatbotWidgetComponent } from './chatbot-widget/chatbot-widget.component';  // Import the widget component
import { MarkdownModule } from 'ngx-markdown';
import { createCustomElement } from '@angular/elements';

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
  
 //bootstrap: [AppComponent]  
})
export class AppModule { 

  constructor(private injector: Injector) {
      // Create a custom element from the WidgetComponent
      const widgetElement = createCustomElement(ChatbotWidgetComponent, { injector });
      // Define the custom element nameentryComponents
      customElements.define('app-root', widgetElement);

  }

  ngDoBootstrap() {

    }



}



