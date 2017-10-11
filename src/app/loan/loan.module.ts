import { NgModule } from "@angular/core";
import { LoanComponent } from "./loan.component";
import { LoanListComponent } from "./loan.list.component";
import { LoanRegisterComponent } from "./loan.register.component";
import { LoanService } from "./loan.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routes";
import { CommonModule, DatePipe } from '@angular/common';
import * as $ from 'jquery';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, routing, CommonModule],
    declarations: [LoanComponent, LoanListComponent, LoanRegisterComponent],
    exports: [LoanComponent, LoanListComponent, LoanRegisterComponent],
    providers: [LoanService, DatePipe]
})

export class LoanModule{}