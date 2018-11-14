import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import {SelectItem, MessageService} from 'primeng/api';
import { DataService } from 'src/app/services/data.service';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

 
  
  valid: boolean = false;
  today: Date = new Date();

  f: FormsModule;

  types: SelectItem[];
  pt: any;

  item: Item = new Item();

  constructor(public dataService: DataService, private messageService: MessageService) { 
    this.types = [
      {label: 'Litro', value: 'Litro'},
      {label: 'Quilograma', value: 'Quilograma'},
      {label: 'Unidade', value: 'Unidade'}
    ];
    
  }

  ngOnInit() {
    //this.f = new FormsModule();
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

  validate(form: NgForm){
    if(this.item.unit.valueOf() == 'Litro'){
      if(!/^[0-9]+(\,[0-9]{2})?lt/.test(this.item.quantity)){
        this.messageService.add({severity:'error', summary: 'Erro na quantidade do item', detail:'Você precisa informar uma quantidade no formato 99,99lt'});
        return;
      }
    } else if(this.item.unit.valueOf() == 'Quilograma'){
      if(!/^[0-9]+(\,[0-9]{2})?kg/.test(this.item.quantity)){
        this.messageService.add({severity:'error', summary: 'Erro na quantidade do item', detail:'Você precisa informar uma quantidade no formato 99,99kg'});
        return;
      }
    } else if(this.item.unit.valueOf() == 'Unidade'){
      if(!/^[0-9]+?un/.test(this.item.quantity)){
      this.messageService.add({severity:'error', summary: 'Erro na quantidade do item', detail:'Você precisa informar uma quantidade no formato 99un'});
      return;
      }
    }

    if(this.item.perishable.valueOf() == true){
      if(this.item.expiration == null){
        this.messageService.add({severity:'error', summary: 'Erro na data de validade', detail:'Você precisa informar uma data de validade, já que o item é perecível'});

        return;
      }
    } else{
        if(this.item.expiration != null){
          this.messageService.add({severity:'error', summary: 'Erro na data de validade', detail:'Você não marcou esse item como perecível'});

          return;
        }
      }

    if(this.item.expiration != null){
      if(this.item.expiration.getDate() <= this.today.getDate()){
        this.messageService.add({severity:'error', summary: 'Intem está com a validade vencida', detail:'A data de validade é igual ou inferior a data atual'});
          return;
      }
    }

    if(this.item.perishable.valueOf() == true && this.item.expiration != null){
      if(this.item.expiration.getDate() <= this.item.manufacture.getDate()){
        this.messageService.add({severity:'error', summary: 'Erro na data de fabricação ou validade', detail:'A data de validade é inferior a data de fabricação do item'});
        return;
      }
    }

     
      this.addItem(form);
      

      
  }

    
  

  addItem(form: NgForm) {

    
    
    this.dataService.addItem(this.item);

    
    
    this.item.name = "";
    this.item.quantity = '';
    this.item.perishable = false;
    this.item.price = '';
    this.item.unit = '';
    this.item.expiration = null;
    this.item.manufacture = null;

    this.messageService.add({severity:'success', summary: 'Item adicionado', detail:'O item foi adicionado com sucesso'});
    form.resetForm();

  }
}
