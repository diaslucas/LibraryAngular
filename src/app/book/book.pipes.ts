import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByNameAndAuthor'
})

export class FilterByNameAndAuthor implements PipeTransform{

    transform(books, inputText: string){
        inputText = inputText.toLowerCase();
        
        return books.filter(book => {

            var expression = new RegExp(inputText.trim(), "i");
            return expression.test(book.nome) || expression.test(book.autor);

        });
    }

}