import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapObject'
})
export class KeyvaluePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === undefined || value === null) {
      return [];
    }

    const keys = Object.keys(value);
    const keyValueArray = keys.map(key => ({
      key,
      value: value[key]
    }));

    return keyValueArray;
  }


}
