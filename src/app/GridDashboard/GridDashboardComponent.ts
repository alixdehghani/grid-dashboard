import { Component } from "@angular/core";
import { GridsterItem, GridType, CompactType, DisplayGrid, GridsterConfig, Draggable, Resizable, PushDirections } from 'angular-gridster2';
import { BaseWidgetConfig } from './WidgetConfig/BaseWidgetConfig';
import { ChartPanelWidgetConfig } from './WidgetConfig/ChartPanelWidgetConfig';
import { PieChartWidgetConfig } from './WidgetConfig/PieChartWidgetConfig';
import { ProfitWidgetConfig } from './WidgetConfig/ProfitWidgetConfig';

@Component({
    selector: 'app-grid-dashboard',
    templateUrl: './GridDashboardComponent.html',
    styleUrls: ['./GridDashboardComponent.scss']
})

export class GridDashboardComponent {
    options: Safe;
    editIcon: 'edit' | 'edit-outline' = 'edit-outline';
    editMode = false;
    selecOptions:{label: string, value: BaseWidgetConfig}[] =[];

    widgets: BaseWidgetConfig[];
  
    constructor() {
      this.widgets = [
        new ProfitWidgetConfig(),
        new PieChartWidgetConfig(),
        new ChartPanelWidgetConfig()
      ];
      this.selecOptions = this.widgets.map(w =>({
        label: w.title,
        value: w
      }));
    }

    ngOnInit(): void {
      this.options = {
        gridType: GridType.VerticalFixed,
        compactType: CompactType.CompactUpAndLeft,
        margin: 10,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        minCols: 1,
        maxCols: 100,
        minRows: 1,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        fixedColWidth: 105,
        fixedRowHeight: 105,
        keepFixedHeightInMobile: false,
        keepFixedWidthInMobile: false,
        scrollSensitivity: 10,
        scrollSpeed: 20,
        enableEmptyCellClick: false,
        enableEmptyCellContextMenu: false,
        enableEmptyCellDrop: false,
        enableEmptyCellDrag: false,
        enableOccupiedCellDrop: false,
        emptyCellDragMaxCols: 50,
        emptyCellDragMaxRows: 50,
        ignoreMarginInRow: false,
        draggable: {
          enabled: false,
        },
        resizable: {
          enabled: false,
        },
        swap: false,
        pushItems: true,
        disablePushOnDrag: false,
        disablePushOnResize: false,
        pushDirections: {north: true, east: true, south: true, west: true},
        pushResizeItems: false,
        displayGrid: DisplayGrid.Always,
        disableWindowResize: false,
        disableWarnings: false,
        disableScrollHorizontal: true,
        scrollToNewItems: true
      };
    }
  
    changedOptions(): void {
      if (this.options.api && this.options.api.optionsChanged) {
        this.options.api.optionsChanged();
      }
    }
  
    removeItem($event: MouseEvent | TouchEvent, item): void {
      $event.preventDefault();
      $event.stopPropagation();
      this.widgets.splice(this.widgets.indexOf(item), 1);
    }
  

    toggleEditMode() {
      this.editMode = !this.editMode;
      this.options.draggable.enabled = this.editMode;
      this.options.resizable.enabled = this.editMode;
      this.options.api.optionsChanged();
      if(this.editMode) {
        this.editIcon = 'edit';
      } else {
        this.editIcon ='edit-outline';
      }
    }
  }
  
  interface Safe extends GridsterConfig {
    draggable: Draggable;
    resizable: Resizable;
    pushDirections: PushDirections;
  }
  