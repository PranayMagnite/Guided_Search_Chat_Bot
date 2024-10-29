import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChatbotWidgetService } from './chatbot-widget.service';


@Component({
  selector: 'app-chatbot-widget',
  templateUrl: './chatbot-widget.component.html',
  styleUrls: ['./chatbot-widget.component.css']
})
export class ChatbotWidgetComponent  implements OnInit,AfterViewChecked {

  isChatOpen = false;  // To toggle the widget visibility
  userInput: string = '';
  @Input() secretKey: string | undefined;
  @Input() clientId: String | undefined;

  @ViewChild('chatBody', { static: false }) chatBody!: ElementRef; // Reference to the chat body div 1

  isValid = false;
  messages: { role: string, content: string }[] = [];
  wcMessage: { role: string, content: string }[] = [];
  response ='';
  userMessage: { role: string, content: string }[] = [];
  META_PROMPT = `You are a Maui Jim assistant.Help users find all kind of products based on their needs and provide customer support service. Recommend products with highlighted name & sku,short information.Focus on use case, lens type, frame style, fit, and color. Ask short follow-ups if needed and suggest multiple options when unsure.response must be in markdown format`;

  
  constructor(private chatService: ChatbotWidgetService) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.secretKey="aloha";
    this.clientId="test";
    this.messages = [];
    this.wcMessage.push({ role :'assistant', content: `Hello! Welcome to Maui Jim sunglasses assistant. I'm here to help you find the perfect pair of sunglasses. Let's get started!`}); //WC message should be configurable
    this.chatService.getSecretKey(this.clientId).subscribe((res)=>{
      if( res.key == this.secretKey)
      {
       this.isValid = true;
       this.chatService.getMetaPrompt(this.clientId).subscribe((res)=>{
       });
      }else{
          this.isValid = false;
      }
     }); 
    this.messages.push({role:'system', content:this.META_PROMPT});   

  }


  // Toggle chat widget visibility
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.ngOnInit();
  }

    // Function to scroll to the bottom of the chat body
    scrollToBottom(): void {
      console.log(this.chatBody);
      try {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Scroll error:', err);
      }
    }

  

    sendMessage() {
      const userMessage = this.userInput;
      if (userMessage.trim() === '') return; 
       this.userInput = '';  
      this.messages.push({ role: 'user', content: userMessage });
      this.filterMessages();
      this.chatService.sendMessage(this.userMessage).subscribe((res) => {
        this.response = res.choices[0].message.content;
        this.messages.push({ role: 'assistant', content: this.response });
      });
   
      }



      filterMessages (){
      //  this.userMessage = this.messages.filter(message => message.role != 'assistant');
      this.userMessage = this.messages;
        if (this.messages.length > 3 ) {
          this.chatService.getchatSummary(this.userMessage).subscribe((res)=>{
            console.log(res);
            this.userMessage = res;
            console.log(this.userMessage);
          })

        }   

      }

      
      
    

  }

