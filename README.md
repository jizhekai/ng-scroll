## Description

**ngx-scroll** is an Angular Directive based on Rxjs 6 and Angular 8

## Dependencies

**Rxjs**

## Installation

```
npm install ngx-scroll --save
```

## Supported API

### Properties

| @Input()         | Type    | Required | Default | Description                                                                                     |
| ---------------- | ------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| canScroll        | boolean | required |         | One of the conditions for deciding whether to roll;The recommended usage is: **offset < count** |
| scrollPercentage | number  | optional | 80      | Limit percentage to scroll                                                                      |

### Events

| @Output() | Type         | Event Type | Description                                  |
| --------- | ------------ | ---------- | -------------------------------------------- |
| scrolled  | EventEmitter | boolean    | This will callback when trigger scroll event |

## Usage

First, import the **NgxScrollModule** to your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollModule } from 'ngx-scroll';
import { AppComponent } from './app';

@NgModule({
  imports: [BrowserModule, NgxScrollModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

In this example, the **onScrolled** callback will be triggered when your conditions are valid and the window is scrolled:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <ul class="scroll" zkNgxScroll [canScroll]="offset < itemCount" (scrolled)="onScrolled()">
      <li *ngFor="let item of list">{{ item }}</li>
    </ul>
  `,
  styles: [
    `
      .scroll {
        max-height: 100px;
        overflow: scroll;
      }
    `
  ]
})
export class AppComponent {
  list: number[] = [1, 2, 3, 4, 5];
  offset: number = 5;
  itemCount: number = 100;

  onScrolled() {
    // scroll event;
    this.offset += 5;
    let index = this.offset;
    for (index; index < this.offset + 5; index++) {
      this.list.push(index);
    }
  }
}
```
