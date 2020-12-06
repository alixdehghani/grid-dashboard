import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { GridsterModule } from 'angular-gridster2';

import { ProfitCardComponent, StatsCardBackComponent, StatsAreaChartComponent, StatsCardFrontComponent, StatsBarAnimationChartComponent } from './WidgetsComponent/ProfitCard';
import { ECommerceLegendChartComponent } from './WidgetsComponent/LegendChart';
import { ECommerceChartsPanelComponent, ChartPanelHeaderComponent, ChartPanelSummaryComponent, OrdersChartComponent, ProfitChartComponent } from './WidgetsComponent/ChartsPanel';
import { GridDashboardComponent } from './GridDashboardComponent';
import { ThemeModule } from '../Theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { WidgetSelectorComponent } from './WidgetsComponent/WidgetSelectorComponent';
import { EchartsPieComponent } from './WidgetsComponent/PieChart/EchartsPieComponent';
import { PieChartComponent } from './WidgetsComponent/PieChart/PieChartComponent';
import { NbPopoverModule } from '@nebular/theme';


const routes: Routes = [{
    path: '',
    component: GridDashboardComponent
}]
@NgModule({
    declarations: [
        GridDashboardComponent,
        ProfitCardComponent,
        StatsCardBackComponent,
        StatsAreaChartComponent,
        StatsCardFrontComponent,
        StatsBarAnimationChartComponent,
        ECommerceChartsPanelComponent,
        ChartPanelHeaderComponent,
        ChartPanelSummaryComponent,
        OrdersChartComponent,
        ProfitChartComponent,
        ECommerceLegendChartComponent,
        WidgetSelectorComponent,
        PieChartComponent,
        EchartsPieComponent, 
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ThemeModule,
        GridsterModule,
        NbPopoverModule,
        NgxEchartsModule.forRoot({
            echarts
        }),
    ],
    exports: [RouterModule]
})

export class GridDashboardModule { }