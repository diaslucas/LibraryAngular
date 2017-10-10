import { Component, Input } from "@angular/core";

@Component({
    template: ""
})

export class UserComponent{

    id: number;
    @Input() name: string;
    @Input() email: string;

}