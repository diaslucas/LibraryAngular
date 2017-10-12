import { NgModule } from "@angular/core";
import { LoanComponent } from "./loan.component";
import { LoanListComponent } from "./loan.list.component";
import { LoanRegisterComponent } from "./loan.register.component";
import { LoanService } from "./loan.service";
import { FilterByBookAndUser } from "./loan.pipes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routes";
import { CommonModule, DatePipe } from '@angular/common';
import * as $ from 'jquery';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, routing, CommonModule],
    declarations: [LoanComponent, LoanListComponent, LoanRegisterComponent, FilterByBookAndUser],
    exports: [LoanComponent, LoanListComponent, LoanRegisterComponent, FilterByBookAndUser],
    providers: [LoanService, DatePipe]
})

export class LoanModule{}