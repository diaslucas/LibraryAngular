import { Component } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";


@Component({
    selector: 'user-list',
    templateUrl: './user.list.component.html'
})

export class UserListComponent{

    users: UserComponent[] = [];
    service: UserService;

    constructor(service: UserService){
        this.service = service;

        service.getList()
        .subscribe(users => {
            this.users = users;
        }, error => console.log(error));
        
    }

}