import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  constructor(private nameService: NameService) {}
  ngOnDestroy(): void {
    this._destroy$.next(undefined);
    this._destroy$.complete();
  }

  ngOnInit(): void {
    this.nameService.nameObservable
      .pipe(takeUntil(this._destroy$))
      .subscribe((name) => {
        console.log(name);
      });
  }
  newValue(): void {
    this.nameService.setValue('fjpewfe');
  }
}
