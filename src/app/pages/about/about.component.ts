import { Component, OnDestroy, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private nameService: NameService) {}
  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  ngOnInit(): void {
    console.log('Initialized');
  }

  newValue(): void {
    this.nameService.setValue('fjpewfe');
  }
}
