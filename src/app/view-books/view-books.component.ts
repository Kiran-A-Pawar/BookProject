import { Component, OnInit } from '@angular/core';

import {Book} from '../Book'
import {RandomuserService} from '../services/randomuser.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent  {

     data : Array <any>
   totalRecords : String
   page : Number=1
   bookId=0;

   isFavorites:true

   constructor(private bookServices: RandomuserService ){
     this.data = new Array<any>()

   }
       getUser(){
            this.bookServices.getData().subscribe((data)=>{
              console.log(data);

              this.data = data
              this.totalRecords = data.length
            }
            
            )
       }

}