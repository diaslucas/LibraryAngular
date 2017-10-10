import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByNameAndEmail'
})

export class FilterByNameAndEmail implements PipeTransform{

    transform(users, inputText: string){
        inputText = inputText.toLowerCase();
        
        return users.filter(user => {

            var expression = new RegExp(inputText.trim(), "i");
            return expression.test(user.nome) || expression.test(user.email);

        });
    }

}