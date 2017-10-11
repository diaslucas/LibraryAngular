import { NgModule } from "@angular/core";
import { LoanComponent } from "./loan.component";
import { LoanListComponent } from "./loan.list.component";

@NgModule({
    imports: [],
    declarations: [LoanComponent, LoanListComponent],
    exports: [LoanComponent, LoanListComponent]
})

export class LoanModule{}