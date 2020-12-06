import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-widget-selector',
    templateUrl: 'WidgetSelectorComponent.html'
})

export class WidgetSelectorComponent implements OnInit {
    @Input() name: string;
    template: TemplateRef<any>;
    @ViewChild('Profit', { static: true }) private _profitTemplate: TemplateRef<any>;
    @ViewChild('ChartPanel', { static: true }) private _chartPanelTemplate: TemplateRef<any>;
    @ViewChild('PieChart', { static: true }) private _pieChartTemplate: TemplateRef<any>;
    
    constructor() { }

    ngOnInit() {
        this.template = this[`_${this.name}Template`];
    }
}