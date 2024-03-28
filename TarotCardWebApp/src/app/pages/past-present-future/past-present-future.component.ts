import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlipcardComponent } from "../../components/flipcard/flipcard.component";

@Component({
    selector: 'app-past-present-future',
    standalone: true,
    templateUrl: './past-present-future.component.html',
    styleUrl: './past-present-future.component.scss',
    imports: [FlipcardComponent]
})
export class PastPresentFutureComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Tarot Scholar - Past Present Future');
  }
  
}
