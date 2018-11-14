import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

   private items: MenuItem[];

    ngOnInit() {
        this.items = [{
          label: 'Cadastrar', icon: 'pi pi-plus', routerLink: ['/form']
        },
        {
          label: 'Listar', icon: 'pi pi-list', routerLink: ['/list']
        }];
    }

}



