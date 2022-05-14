## DESCRIPTION
**User Idle / Session Timout** detector service for Angular 13. You can use this for session timeout, user idle restriction after a period of time etc..

## INSTALLATION
```sh
npm install ng-idle-detector
```

## How to use angular idle detector in your angular app

### API List
1. **startWatching(timeOutSeconds)** - This method is used to initiate the idle detector in angular. `timeoutSeconds` is a parameter, number of seconds to emit the idle event. This method returns an observable which you can subscribe to detect the idleness of the user.
2. **resetTimer()** - This method is used to reset the timer
3. **stopTimer()** - This method is used to stop the idle detector.


## Sample Code for Angular User Idle

### app.module.ts - Import the NgIdleDetectorService in your module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIdleDetectorService } from 'ng-idle-detector';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgIdleDetectorService], // add it to the providers of your module
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### app.component.ts - Import the NgIdleDetectorService in your component

```typescript
import { Component } from '@angular/core';
import { NgIdleDetectorService } from 'ng-idle-detector'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ngIdleDetectorService: NgIdleDetectorService) {

  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.ngIdleDetectorService.startWatching(60).subscribe((isExpired: boolean) => {
      if (isExpired) {
        console.log('session expired');
      }
    });
  }
}

```

In the above example, I have invoked the `startWatching(timeOutSeconds)` method with 60 seconds (1 minute) and subscribed to the observable, once the user is idle for one minute then the subscribe method will get invoked with the `isExpired` parameter's value (which is a boolean) as `true`.

By checking whether the `isExpired` is true or not, you can show your session timeout dialog or message. For brevity, I just logged the message to the console.