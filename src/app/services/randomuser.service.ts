import { Injectable } from '@angular/core';
import {Book} from '../Book'
import {Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  constructor(private HttpClient: HttpClient ) { }

    getData():Observable<any>{
     // const url ="https://609cd6ba04bffa001792d638.mockapi.io/books";
     const url ="http://localhost:3000/Books";
      return this.HttpClient.get<any>(url)
    }

    ViewBook(bookId): Observable<Book>{
      const Bookurl = 'http://localhost:3000/Books/'+bookId;
 
         return this.HttpClient.get<Book>(Bookurl);
      }

      
      updateBook(bookId,bookBody?): Observable<Book>{
        const Bookurl = 'http://localhost:3000/Books/'+bookId;
   
           return this.HttpClient.put<Book>(Bookurl,bookBody);
        }

}












