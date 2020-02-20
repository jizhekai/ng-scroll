import { Directive, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, tap, map, filter } from 'rxjs/operators';

@Directive({
  selector: '[zkNgxScroll]'
})
export class NgxScrollDirective implements OnInit {
  @Input() canScroll: boolean; // the condition of scroll,required
  @Input() scrollPercentage = 80;
  @Output() scrolled: EventEmitter<boolean> = new EventEmitter(); // emit the scroll

  constructor(private el: ElementRef<any>) {}
  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'scroll')
      .pipe(
        map((event: any) => event.target),
        debounceTime(500),
        filter(event => (event.scrollTop + event.clientHeight) / event.scrollHeight > this.scrollPercentage / 100 && this.canScroll),
        tap(() => this.scrolled.emit(true))
      )
      .subscribe();
  }
}
