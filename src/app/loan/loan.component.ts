import { Component } from "@angular/core";
import { BookComponent } from "../book/book.component";
import { UserComponent } from "../user/user.component";

@Component({
    moduleId: module.id,
    template: ''
})

export class LoanComponent{

    id: number;
    livro: BookComponent;
    usuario: UserComponent;
    dataEmprestimo: Date = new Date();
    dataDevolucao: Date = new Date();
    devolvido: boolean;

}