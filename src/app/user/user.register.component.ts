import { Component } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'form-user',
    templateUrl: './user.register.component.html'

})

export class UserRegisterComponent{

    user: UserComponent = new UserComponent();
    form: FormGroup;
    service: UserService;
    activatedRoute: ActivatedRoute;
    router: Router;

    constructor(service: UserService, fb: FormBuilder, activatedRoute: ActivatedRoute, router: Router) {
        
                this.service = service;
        
                this.activatedRoute = activatedRoute;
                this.router = router;
        
                this.activatedRoute.params.subscribe(params => {
        
                    let id = params["id"];
        
                    if(id){
                        this.service
                        .getById(id)
                        .subscribe(user => this.user = user, erro => console.log(erro));
                    }
        
                });
        
                this.form = fb.group({
                    nome: [""],
                    email: [""]
                });
                
            }
        
            identifyAction(event) {
        
                if(this.user.id){
                    this.update(event);
                }
                else{
                    this.add(event);
                }
        
            }
        
            add(event) {
        
                this.service.add(this.user).subscribe(res => {
                    this.user = new UserComponent();
                }, erro => console.log(erro));
        
            }
        
            update(event) {
        
                this.service.update(this.user).subscribe(res => {
                    this.router.navigate(["/users"]);
                }, erro => console.log(erro));
        
            }

}
 