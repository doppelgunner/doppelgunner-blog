import { Injectable } from '@angular/core';
import { TempText } from '../models';

@Injectable()
export class TempService {

  constructor() { }

  public get tempText(): TempText {
    return new TempText();
  }
}
