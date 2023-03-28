import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { Product, Todo, PocService, User,  Customer} from '../../poc.service';
import ArrayStore from 'devextreme/data/array_store';
import notify from 'devextreme/ui/notify';
import { DxButtonModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';



@Component({
  templateUrl: 'gridpoc.component.html'
})



export class GridpocComponent {

  simpleTodos: string[]; 
  dataSource: any;
  priority: any[];
  nameValue: string;
  nameValue2: Date;
  currentValue: any;
  minDateValue: any;
  maxDateValue: any;
  todos: Todo[];
  data: any;
  scombobox: string;
  html: string;
  customers: Customer[];

  constructor(private pocservice: PocService ) {

    //this.customers = pocservice.getCustomers();
    this.customers = [];

    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];

 
    /*
    this.currentValue =new Date();
    this.minDateValue =new Date("2023-01-02");  
    this.maxDateValue =new Date("2023-03-01"); 
     */

    //COMBOBOX
    //LOAD API
    

   this.pocservice.getAll().subscribe((data: Todo[]) =>{
       //console.warn(data[0].title);
      let myArray = [];
      for(var i = 0; i < data.length; i++) {
        myArray.push(data[i].title);
      }
      let arraySTodos: string[] = myArray;
      this.simpleTodos = arraySTodos;
    } ); 

   // console.log(this.data);

    this.pocservice.getById(1).subscribe((data: Todo) =>{
     this.nameValue = data.title;
    } );

    this.pocservice.getUserById(1).subscribe((data: User) =>{
     // this.nameValue2= data.birthDate;
     this.currentValue =new Date(data.birthDate);
     this.minDateValue =new Date(data.birthDate);
     this.maxDateValue =new Date(data.birthDate);

     } );


     this.scombobox = " <dx-select-box \
     #selectBox \
     [items]=\"simpleTodos\" \
     [value]=\"simpleTodos[0]\" \
     (onValueChanged)=\"onValueChanged($event)\" \
     />       ";

     this.html = "<article> \
     <h1>Article title</h1> \
     </article>";
  }

  onValueChanged(e: any) {
    notify(`The value is changed to: "${e.value}"`);
  }

  //poblando el datagrid haciendo clic en el boton
  clickBDatagrid(e: any) {
    const buttonText = e.component.option('text');
    notify(`The ${buttonText}  button was clicked`);
    this.customers = PocService.getCustomers();
  }

  clickBDatagridBorrar(e: any) {
    const buttonText = e.component.option('text');
    notify(`The ${buttonText}  button was clicked`);
    this.customers = [];
  }

}




