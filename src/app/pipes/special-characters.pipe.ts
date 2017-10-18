import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialCharacters'
})
export class SpecialCharactersPipe implements PipeTransform {

  transform(value):any {
    if (!value) return;
    let text = document.createElement("textarea");
    text.innerHTML = value;
    return text.value;
  }

}
