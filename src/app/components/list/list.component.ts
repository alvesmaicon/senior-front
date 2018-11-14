import { Component, OnInit} from '@angular/core';
import {SelectItem, ConfirmationService, Message, MessageService} from 'primeng/api';

import { Item } from '../../models/item';
import { DataService } from '../../services/data.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: #ffffff;
        }
    `]

})

export class ListComponent implements OnInit {

  items: Item[];

  selectedItem: Item = new Item();

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  index: number;

  sortOrder: number;

  mdate: string;
  edate: string;

  pt: any;

  constructor(public dataService: DataService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {

    this.items = this.dataService.getItems();
    
    this.sortOptions = [
      {label: 'Fabricado recente', value: '!manufacture'},
      {label: 'Fabricado antigo', value: 'manufacture'},
      {label: 'Nome', value: 'name'}
    ];

    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  selectItem(event: Event, item: Item) {
    this.selectedItem = item;

    this.displayDialog = true;
    event.preventDefault();
}
confirmRemoveItem(event: Event, item: Item) {
  this.confirmationService.confirm({
    message: 'Você tem certeza que deseja remover este item?',
    header: 'Remover item',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.dataService.removeItem(item);
      this.messageService.add({severity:'success', summary: 'Item removido', detail:'O item foi removido com sucesso'});
    },
    reject: () => {
      this.messageService.add({severity:'info', summary: 'Operação cancelada', detail:'Você cancelou a remoção do item'});
    }
  });
  event.preventDefault();
}

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedItem = null;
  }

}
