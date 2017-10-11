import { Component } from "@angular/core";
import { LoanComponent } from "./loan.component";

@Component({
    moduleId: module.id,
    selector: 'loan-list',
    templateUrl: './loan.list.component.html'
})

export class LoanListComponent{

    loans: LoanComponent[] = [];

}