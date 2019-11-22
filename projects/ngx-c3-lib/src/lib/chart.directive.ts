import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartAPI, Data, generate} from 'c3';
import * as _ from 'lodash';

@Directive({
  selector: '[c3Chart]'
})
export class ChartDirective implements OnChanges {
  @Input() data: Data;

  private chart: ChartAPI;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (_.has(changes, 'data')) {
      if (changes.data.isFirstChange()) {
        this.initC3();
      }
    }
  }

  private initC3() {
    this.chart = generate({
      bindto: this.el.nativeElement,
      data: this.data
    });
  }

}
