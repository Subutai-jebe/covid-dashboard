import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], args: string): any {
    if (!args.length) {

      return values;
    }

    return values.filter((covidCountries) => {
      return covidCountries.name.common.toLocaleLowerCase().includes(args.toLowerCase());
    });

  }

}
