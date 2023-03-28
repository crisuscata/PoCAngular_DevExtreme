import { Component, ViewChild } from '@angular/core';
import { Product, Todo, PocService, User,  Customer} from '../../poc.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { DxColorBoxModule } from 'devextreme-angular';

@Component({
  templateUrl: 'pocproperties.component.html',
  styleUrls: ['pocproperties.component.css']
})
//pocproperties.component.css
export class PocpropertiesComponent {

  customers: Customer[];
  isPaginator: boolean;
  isFiltros: boolean;

  constructor(private pocservice: PocService ) {

    this.isPaginator = false;
    this.isFiltros = false;
    this.customers = pocservice.getCustomersProperties();
  }

  handleValueChange(e: any) {

    if(e.value){
      console.log("2 e.value: " + e.value);
      this.isPaginator=true;
    } else{
      console.log("3 e.value: " + e.value);
      this.isPaginator=false;
    }
  }


  handleValueChange2(e: any) {

    if(e.value){
      console.log("2 e.value: " + e.value);
      this.isFiltros=true;
    } else{
      console.log("3 e.value: " + e.value);
      this.isFiltros=false;
    }
 
  }
  //*******************************

}


export class AppComponent {
  currentColor = '#f05b41';
}
//********************
const elementos = document.getElementsByClassName('dx-field-value');
console.log(elementos[0]);