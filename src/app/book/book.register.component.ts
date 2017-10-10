import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookComponent } from "./book.component";
import { Http } from "@angular/http";
import { BookService } from "./book.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'form-book',
    templateUrl: './book.register.component.html'
})

export class RegisterBookComponent{

    book: BookComponent = new BookComponent();
    form: FormGroup;
    service: BookService;
    activatedRoute: ActivatedRoute;
    router: Router;


    constructor(service: BookService, fb: FormBuilder, activatedRoute: ActivatedRoute, router: Router) {

        this.service = service;

        this.activatedRoute = activatedRoute;
        this.router = router;

        this.activatedRoute.params.subscribe(params => {

            let id = params["id"];

            if(id){
                this.service
                .getById(id)
                .subscribe(book => this.book = book, erro => console.log(erro));
            }

        });

        this.form = fb.group({
            nome: [""],
            autor: [""],
            quantidade: [""]
        });
        
    }

    identifyAction(event) {

        if(this.book.id){
            this.update(event);
        }
        else{
            this.add(event);
        }

    }

    add(event) {

        this.service.add(this.book).subscribe(res => {
            this.book = new BookComponent();
        }, erro => console.log(erro));

    }

    update(event) {

        this.service.update(this.book).subscribe(res => {
            this.router.navigate(["/books"]);
        }, erro => console.log(erro));

    }


}


