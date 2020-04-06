import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'jsontrans'
})
export class JsonttransPipe implements PipeTransform {
  constructor(private tran:TranslationService){}

  transform(value: any): any {
    return value[this.tran.getlocalLang()];
  }

}
