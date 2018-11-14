import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { DataService } from './services/data.service';

import {MenubarModule} from 'primeng/menubar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DataViewModule} from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessageModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    NavComponent,
    
  ],
  imports: [
    ConfirmDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    NoopAnimationsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    ButtonModule,
    BreadcrumbModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    SelectButtonModule,
    ToastModule,
    KeyFilterModule,
    MessageModule,
    InputMaskModule
   
  ],
  providers: [
    DataService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
