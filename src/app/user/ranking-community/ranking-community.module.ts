import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingCommunityRoutingModule } from './ranking-community-routing.module';
import { RankingCommunityComponent } from './ranking-community.component';

import { DataTablesModule } from "angular-datatables";
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';





@NgModule({
  declarations: [
    RankingCommunityComponent
  ],
  imports: [
    CommonModule,
    RankingCommunityRoutingModule,
    DataTablesModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule
  ]
})
export class RankingCommunityModule { }
