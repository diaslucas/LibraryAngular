import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserRegisterComponent } from "./user.register.component";
import { UserListComponent } from "./user.list.component";
import { UserService } from "./user.service";
import { FilterByNameAndEmail } from "./user.pipes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routes";
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, routing, CommonModule],
    declarations: [UserComponent, UserListComponent, UserRegisterComponent, FilterByNameAndEmail],
    exports: [UserComponent, UserListComponent, UserRegisterComponent, FilterByNameAndEmail],
    providers: [UserService]
})

export class UserModule{}