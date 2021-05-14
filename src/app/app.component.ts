import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

import {RandomuserService} from './services/randomuser.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  //  data : Array <any>
  //  totalRecords : String
  //  page : Number=1
  //  bookId=0;

  //  isFavorites:true

  //  constructor(private bookServices: RandomuserService ){
  //    this.data = new Array<any>()

  //  }
  //      getUser(){
  //           this.bookServices.getData().subscribe((data)=>{
  //             console.log(data);

  //             this.data = data
  //             this.totalRecords = data.length
  //           }
            
  //           )
  //      }


      //  UpdateBook(form){
      //   let updatebook = {
      //       id : form.value.id,
        
            
      //     isFavorites: form.value.isFavorites
      //   };
      
      //   this.bookServices.updateBook(this.bookId,form.value)
      //   console.log(form);
      // }


}













