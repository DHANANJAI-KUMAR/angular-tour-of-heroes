// text-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string, format: 'title' | 'reverse'): string {
    if (!value) return '';

    switch (format) {
      case 'title':
        return value
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      case 'reverse':
        return value.split('').reverse().join('');
      default:
        return value;
    }
  }
}
