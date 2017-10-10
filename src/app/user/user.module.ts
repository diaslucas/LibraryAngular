import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user.list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../app.routes";
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, routing, CommonModule],
    declarations: [UserComponent, UserListComponent],
    exports: [UserComponent, UserListComponent]
})

export class UserModule{}