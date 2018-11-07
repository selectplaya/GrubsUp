import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    if (isNaN(value) || value === 0) {
      return "Please start the timer";
    }
    return minutes + ' min :' + (value - minutes * 60) + ' secs';
  }

}
