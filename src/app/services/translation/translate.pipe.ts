import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslationService) {
  }

  db=this.translate.lang_db;

  transform(keyWord: string): string {
   // console.log(keyWord);

    var result=keyWord;
    // this.db.find((words) => {
    //     if (words.key===keyWord) {
    //        words.langs.find((word) => {
    //         if (word.lang===this.translate.local) {
    //           result =word.word
    //          }
    //      });
    //     }
    // });
    //     if (  this.translate.ifExistInArray(this.db,keyWord)==false &&  this.translate.ifExistInArray(this.translate.newWords,keyWord)==false) {
    //       this.translate.newWords.push({"key":result,"langs":[{"lang":"ar","word":""}]})
    //      // console.log("---------------------------------------");
    //      // console.log( JSON.stringify( this.translate.newWords));
    //      //console.log(this.translate.temp_database)

    //     }

    //this.db[keyWord][this.translate.local]

    return this.translate.translate(keyWord);
  }

}