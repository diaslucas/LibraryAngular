import { Component } from "@angular/core";
import { LoanComponent } from "./loan.component";
import { LoanService } from "./loan.service";

@Component({
    moduleId: module.id,
    selector: 'loan-list',
    templateUrl: './loan.list.component.html'
})

export class LoanListComponent{

    loans: LoanComponent[] = [];
    service: LoanService;

    constructor(service: LoanService) {
        
        this.service = service;

        service.getList()
        .subscribe(loans => {
            this.loans = loans;
        }, error => console.log(error));
        
    }

}