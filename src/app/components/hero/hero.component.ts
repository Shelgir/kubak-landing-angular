import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewCounterService } from 'src/app/backend/services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  viewCount: number | undefined;

  constructor(private viewCounterService: ViewCounterService) {}

  async ngOnInit(): Promise<void> {
    this.viewCount =
      (await this.viewCounterService.viewCounterGet().toPromise())?.count ?? 0;
  }
}
