import { Directive, EventEmitter, HostListener, Input, Output, } from '@angular/core';

@Directive({
  selector: '[idleTimeout]',
})
export class IdleTimeoutDirective {

  @Output() onTimeout: EventEmitter<void> = new EventEmitter<void>();
  @Input('idleTime') _idleTime!: number;
  private timer: any;

  constructor() {
    this.resetTimer();
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:keydown', ['$event'])
  @HostListener('window:click', ['$event'])
  resetTimer() {
    clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.onTimeout.emit();
      }, this._idleTime);
  }
}
