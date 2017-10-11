import { Component } from "@angular/core";
import { LoanComponent } from "./loan.component";

@Component({
    moduleId: module.id,
    selector: 'form-loan',
    templateUrl: './loan.register.component.html'
})

export class LoanRegisterComponent{

    loan: LoanComponent;

}