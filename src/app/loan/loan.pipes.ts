import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByBookAndUser'
})

export class FilterByBookAndUser implements PipeTransform{

    transform(loans, inputText: string){
        inputText = inputText.toLowerCase();
        
        return loans.filter(loan => {

            var expression = new RegExp(inputText.trim(), "i");
            return expression.test(loan.livro.nome) || expression.test(loan.usuario.nome);

        });
    }

}