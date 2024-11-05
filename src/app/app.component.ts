import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Guided_Search_Chat_Bot';
  @Input() secretKey: string | undefined;
  @Input() clientId: String | undefined;
  @Input() productName: String | undefined;
}
