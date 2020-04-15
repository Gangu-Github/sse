import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sse';
  boxNum: Number;
  showBox1 = true;
  showBox2 = true;
  showBox3 = true;
  showBox4 = true;

  receiveMessage($event) {
    this.boxNum = $event;
    // console.log(this.boxNum);
    switch (this.boxNum) {
      case 1:
        this.showBox1 = !this.showBox1;
        break;
      case 2:
        this.showBox2 = !this.showBox2;
        break;
      case 3:
        this.showBox3 = !this.showBox3;
        break;
      case 4:
        this.showBox4 = !this.showBox4;
        break;
    }
  }
}
