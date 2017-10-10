import { Component, Input } from "@angular/core";

@Component({
    template: ""
})

export class BookComponent{

    id: number;
    @Input() name: string;
    @Input() author: string;
    @Input() quantity: number;

}