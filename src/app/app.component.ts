import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jest';

  isBotaoTresActive = false;

  print(string: string) {
    console.log(string);
  }

  toggleActive() {
    this.isBotaoTresActive = !this.isBotaoTresActive;
  }
}
