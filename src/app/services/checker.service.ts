import { Injectable } from '@angular/core';

@Injectable()
export class CheckerService {

  constructor() { }

  public isEmpty(value: string): boolean {
    if (value == null || value == undefined || value.length == 0) return true;
    return false; 
  }

}
