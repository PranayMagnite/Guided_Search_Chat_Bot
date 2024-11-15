import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Guided_Search_Chat_Bot';
  @Input() secretKey: string | undefined;
  @Input() clientId: string | undefined;
  @Input() productName: string | undefined;
  @Input() productDetails: string | undefined;
  @Input() recommendedProduct : string | undefined;


}
