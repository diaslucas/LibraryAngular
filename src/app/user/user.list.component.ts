import { Component } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import swal from 'sweetalert2';

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

    delete(user: UserComponent, tr){

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(() => {
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
        
            this.service.delete(user)
            .subscribe(() => {
                $(tr).fadeOut(1000);
            }, error => console.log(error));


          });

    }

}