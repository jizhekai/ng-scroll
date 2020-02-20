import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll';
  list = [1, 2, 3, 4, 5];
  offset = 5;
  itemCount = 100;

  conditionChanged(): void {
    this.offset += 5;
    let index = this.offset;
    for (index; index < this.offset + 5; index++) {
      this.list.push(index);
    }
  }
}
