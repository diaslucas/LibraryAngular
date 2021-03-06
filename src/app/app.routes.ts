import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegisterBookComponent } from "./book/book.register.component";
import { BookListComponent } from "./book/book.list.component";
import { UserListComponent } from "./user/user.list.component";
import { UserRegisterComponent } from "./user/user.register.component";
import { LoanListComponent } from "./loan/loan.list.component";
import { LoanRegisterComponent } from "./loan/loan.register.component";

const appRoutes: Routes = [
    { path: '', component: LoanListComponent },
    { path: 'book', component: RegisterBookComponent },
    { path: 'book/:id', component: RegisterBookComponent },
    { path: 'books', component: BookListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'user', component: UserRegisterComponent },
    { path: 'user/:id', component: UserRegisterComponent },
    { path: 'loan', component: LoanRegisterComponent },
    { path: 'loan/:id', component: LoanRegisterComponent },
];

export const routing = RouterModule.forRoot(appRoutes);