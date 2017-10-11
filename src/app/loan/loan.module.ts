import { NgModule } from "@angular/core";
import { LoanComponent } from "./loan.component";
import { LoanListComponent } from "./loan.list.component";
import { LoanService } from "./loan.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routes";
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, routing, CommonModule],
    declarations: [LoanComponent, LoanListComponent],
    exports: [LoanComponent, LoanListComponent],
    providers: [LoanService]
})

export class LoanModule{}