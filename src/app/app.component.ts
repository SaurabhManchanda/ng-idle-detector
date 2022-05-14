import { Component } from '@angular/core';
import { NgIdleDetectorService } from 'ng-idle-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngIdleDetectorService: NgIdleDetectorService) { }
  title = 'ng-idle-detector-app';

  ngOnInit(): void {
    this.ngIdleDetectorService.startWatching(15).subscribe((isExpired: boolean) => {
      if (isExpired) {
        console.log('session expired');
      }
    });
  }
}