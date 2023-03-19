import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { WeatherCollection, WeatherObj } from 'src/app/types/weatherTypes';

export enum TimeNavigation {
  CURRENT = 'current',
  NEXT = 'next',
  PREVIOUS = 'previous'
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnChanges {
  @Input() weather!: WeatherCollection;

  public chart!: Chart;
  public chartLabels!: Array<string>
  public chartData!: Array<number>

  public timeNavigationEnum = TimeNavigation;
  public timeStart!: number;
  public timeEnd!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['weather']['currentValue']) return;

    this.createChartData(this.weather.hourly)

    changes['weather']['firstChange'] ? this.buildChart() : this.updateChart();
  }

  public updateChart(chartData?: {labels: Array<string>, data: Array<number>}): void {
    if(chartData) {
      this.chart.data.labels = chartData.labels;
      this.chart.data.datasets[0].data = chartData.data;
    } else {
      this.chart.data.labels = this.chartLabels.slice(0, 9);
      this.chart.data.datasets[0].data = this.chartData.slice(0, 9);
    }

    this.chart.update();

  }

  private buildChart(): void {
    this.chart = new Chart("weatherChart", {
      type: 'line',
      data: {
        labels: this.chartLabels.slice(0, 9),
        datasets: [{
          label: 'Temperatuur',
          data: this.chartData.slice(0, 9),
          borderWidth: 1,
          tension: 0.45
        },
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  private createChartData(weather: Array<WeatherObj>): void {
    this.chartLabels = weather.map((weather) => new Date(weather.dt).getHours() + ':00')
    this.chartData = weather.map((weather) => +weather.temp)
  }
}
