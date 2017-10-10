import { Component, Inject } from "@angular/core";
import { BookComponent } from "./book.component";
import { BookService } from "./book.service";
import swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    selector: "book-list",
    templateUrl: './book.list.component.html'
})

export class BookListComponent{

    books:BookComponent[] = [];
    service: BookService;

    constructor(service: BookService){
        this.service = service;

        service.getList()
        .subscribe(books => {
            this.books = books;
        }, error => console.log(error));
        
    }

    delete(book: BookComponent, tr){

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(() => {
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
        
            this.service.delete(book)
            .subscribe(() => {
                $(tr).fadeOut(1000);
            }, error => console.log(error));


          });

    }

}