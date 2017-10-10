import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
// import { BookModule } from "./book/book.module";
import { RegisterBookComponent } from "./book/book.register.component";
import { BookListComponent } from "./book/book.list.component";
import { UserListComponent } from "./user/user.list.component";

const appRoutes: Routes = [
    { path: 'book', component: RegisterBookComponent },
    { path: 'book/:id', component: RegisterBookComponent },
    { path: 'books', component: BookListComponent },
    { path: 'users', component: UserListComponent }
];

export const routing = RouterModule.forRoot(appRoutes);