import { Component, OnInit } from '@angular/core';
import { ChatbotWidgetService } from './chatbot-widget.service';


@Component({
  selector: 'app-chatbot-widget',
  templateUrl: './chatbot-widget.component.html',
  styleUrls: ['./chatbot-widget.component.css']
})
export class ChatbotWidgetComponent  implements OnInit {

  isChatOpen = false;  // To toggle the widget visibility
  userInput: string = '';
  messages: { role: string, content: string }[] = [];
  response ='';

  META_PROMPT = `
You are a smart guided search assistant for the Maui Jim sunglasses website. Your job is to help users select the perfect pair of sunglasses based on their lifestyle needs, preferences, and use cases. Use friendly and informative language, and provide product recommendations with justifications. Always consider factors such as:
- Use case (e.g., driving, fishing, outdoor sports, fashion).
- Lens type (e.g., polarized, UV protection).
- Frame style and material (e.g., aviator, wraparound, metal, acetate).
- Fit (e.g., unisex, men’s, women’s).
- Color preferences for both lenses and frames.

Respond clearly to user queries by asking clarifying questions if needed. If unsure, suggest multiple relevant options .
`;

  
  constructor(private chatService: ChatbotWidgetService) {}

  ngOnInit(): void {
    this.messages = [];
    this.messages.push({role:'system', content:this.META_PROMPT});
    this.messages.push({ role :'assistant', content: `Hello! Welcome to Maui Jim sunglasses assistant. I'm here to help you find the perfect pair of sunglasses. Let's get started!` });
  }


  // Toggle chat widget visibility
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.ngOnInit();
  }

  

    sendMessage() {
      const userMessage = this.userInput;
      if (userMessage.trim() === '') return; 
       this.userInput = '';  
      this.messages.push({ role: 'user', content: userMessage });
      this.chatService.sendMessage(this.messages).subscribe((res) => {
        this.response = res.choices[0].message.content;
        this.messages.push({ role: 'assistant', content: this.response });
      });
   
      }
    

  }

