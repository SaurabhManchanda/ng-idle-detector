import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { Subject, merge, fromEvent, timer } from 'rxjs';

class NgIdleDetectorService {
    constructor() {
        this.expired$ = new Subject();
    }
    startWatching(timeOutSeconds) {
        this.idle$ = merge(fromEvent(document, 'mousemove'), fromEvent(document, 'click'), fromEvent(document, 'mousedown'), fromEvent(document, 'keypress'), fromEvent(document, 'DOMMouseScroll'), fromEvent(document, 'mousewheel'), fromEvent(document, 'touchmove'), fromEvent(document, 'MSPointerMove'), fromEvent(window, 'mousemove'), fromEvent(window, 'resize'));
        this.timeOutMilliSeconds = timeOutSeconds * 1000;
        this.idleSubscription = this.idle$.subscribe((res) => {
            this.resetTimer();
        });
        this.startTimer();
        return this.expired$;
    }
    startTimer() {
        this.timer$ = timer(this.timeOutMilliSeconds).subscribe((res) => {
            this.expired$.next(true);
        });
    }
    resetTimer() {
        this.timer$.unsubscribe();
        this.startTimer();
    }
    stopTimer() {
        this.timer$.unsubscribe();
        this.idleSubscription.unsubscribe();
    }
}
NgIdleDetectorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgIdleDetectorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgIdleDetectorModule {
}
NgIdleDetectorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgIdleDetectorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorModule });
NgIdleDetectorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorModule, providers: [NgIdleDetectorService], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [NgIdleDetectorService],
                }]
        }] });

/*
 * Public API Surface of ng-idle-detector
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgIdleDetectorModule, NgIdleDetectorService };
//# sourceMappingURL=ng-idle-detector.mjs.map
