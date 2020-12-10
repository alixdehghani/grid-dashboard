import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbPopoverModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';
import * as echarts from 'echarts';
import { GridsterModule } from 'angular-gridster2';

import {
    ProfitCardComponent,
    StatsCardBackComponent,
    StatsAreaChartComponent,
    StatsCardFrontComponent,
    StatsBarAnimationChartComponent,
    ECommerceLegendChartComponent,
    WidgetSelectorComponent,
    EchartsPieComponent,
    PieChartComponent,
    NoteBookComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent
} from './Widgets';
import { GridDashboardComponent } from './grid-dashboard.component';
import { ThemeModule } from '../../Theme/theme.module';
import { ThemeSwitcherModule } from 'src/app/ThemeSwicher';


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
        NoteBookComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ThemeModule,
        GridsterModule,
        NbPopoverModule,
        ThemeSwitcherModule,
        NgxEchartsModule.forRoot({
            echarts
        }),
    ],
    exports: [RouterModule]
})

export class GridDashboardModule { }