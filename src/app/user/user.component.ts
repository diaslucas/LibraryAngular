import { Component, Input } from "@angular/core";

@Component({
    template: ""
})

export class UserComponent{

    id: number;
    @Input() nome: string;
    @Input() email: string;

}