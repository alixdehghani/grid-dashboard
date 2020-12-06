import { Component } from '@angular/core';
import { LayoutService } from './layout.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { ProfitBarAnimationChartData } from './profit-bar-animation-chart';
import { StatsBarService } from './stats-bar.service';
import { StatsBarData } from './stats-bar';

@Component({
  selector: 'ngx-profit-card',
  styleUrls: ['./profit-card.component.scss'],
  templateUrl: './profit-card.component.html',
  providers: [
    LayoutService,
    {
      provide: ProfitBarAnimationChartData,
      useClass: ProfitBarAnimationChartService
    },
    {
      provide: StatsBarData,
      useClass: StatsBarService
    }
  ]
})
export class ProfitCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
