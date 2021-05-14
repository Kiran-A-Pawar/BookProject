
import { Component, OnInit } from '@angular/core';
import {Book} from '../Book'
import {RandomuserService} from '../services/randomuser.service'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  bookId = 0;
  bookDetails : Book;
  isFavorites : true
  constructor(private activatedRoute :ActivatedRoute,
    private bookServices : RandomuserService) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
  this.bookId = data.id;
    })
    this.bookServices.ViewBook(this.bookId).subscribe(bookData => {
       this.bookDetails= bookData;

    });

  }

  UpdateBooks(id){
     
    this.isFavorites=true;


    this.activatedRoute.params.subscribe(data=>{
      this.bookId = id;
        })
        this.bookServices.ViewBook(this.bookId).subscribe(bookData => {
           this.bookDetails= bookData;
    
      });
      this.bookDetails.isFavorites = this.isFavorites;

    this.bookServices.updateBook(id,this.bookDetails)

  }

  // UpdateValue(form) {
 
  //   let contact = {
      
  //     price:"759.00",
  //      isFavorites: true,
  //     book_author:"Arvid",
  //     book_image:"http://placeimg.com/640/480/people",
  //     name:"Intelligent Plastic Table","createdAt":"2021-05-12T18:23:07.423Z",
  //     id:"1"

      
  //   };
 
  //   this.prouductsServices.setValue(this.bookId).subscribe(bookData => {
  //     this.bookDetails= bookData;
  //  });
  // }




}