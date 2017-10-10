import { NgModule } from "@angular/core";
import { routing } from "../app.routes";
import { CommonModule } from '@angular/common';
import { BookComponent } from "./book.component";
import { BookListComponent } from "./book.list.component";
import { RegisterBookComponent } from "./book.register.component";
import { FilterByNameAndAuthor } from "./book.pipes";
import { BookService } from "./book.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as $ from 'jquery';


@NgModule({
    imports: [routing, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [BookComponent, BookListComponent, RegisterBookComponent, FilterByNameAndAuthor],
    exports: [BookComponent, BookListComponent, RegisterBookComponent, FilterByNameAndAuthor],
    providers: [BookService]
})

export class BookModule{}