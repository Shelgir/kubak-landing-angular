import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private _name = new Subject<string>();

  get nameObservable(): Observable<string> {
    return this._name.asObservable();
  }
  constructor() {}

  setValue(name: string): void {
    this._name.next(name);
  }
}
