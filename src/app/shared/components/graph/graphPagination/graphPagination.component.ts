import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TimeNavigation } from '../graph/graph.component';

@Component({
  selector: 'app-graphPagination',
  templateUrl: './graphPagination.component.html',
  styleUrls: ['./graphPagination.component.scss']
})
export class GraphPaginationComponent implements OnChanges {
  @Input() chartData!: {chartData: Array<number>, chartLabels: Array<string>};
  @Output() newChartEvent = new EventEmitter<{labels: Array<string>, data: Array<number>}>()

  public previousBtn = true;
  public nextBtn = false;

  public timeNavigationEnum = TimeNavigation;
  public timeStart = 0;
  public timeEnd = 8;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'].currentValue) {
      this.resetButtons();
    }
  }

  public navigateChart(timeNavigation: TimeNavigation): void {
    switch (timeNavigation) {
      case TimeNavigation.NEXT:
        this.timeStart += 8, this.timeEnd += 8;
        break;
      case TimeNavigation.PREVIOUS:
        this.timeStart -= 8, this.timeEnd -= 8;
        break;
    }

    this.nextBtn = this.timeEnd >= this.chartData.chartLabels.length;
    this.previousBtn = this.timeStart <= 0

    this.newChartEvent.emit({
      labels: this.chartData.chartLabels.slice(this.timeStart, this.timeEnd + 1),
      data: this.chartData.chartData.slice(this.timeStart, this.timeEnd + 1)
    });
  }

  private resetButtons(): void {
    this.timeStart = 0;
    this.timeEnd = 8;

    this.previousBtn = true;
    this.nextBtn = false;
  }
}
