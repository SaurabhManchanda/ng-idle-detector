import { Injectable } from '@angular/core';
import { fromEvent, merge, Subject, timer } from 'rxjs';
import * as i0 from "@angular/core";
export class NgIdleDetectorService {
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
/** @nocollapse */ NgIdleDetectorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ NgIdleDetectorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: NgIdleDetectorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaWRsZS1kZXRlY3Rvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctaWRsZS1kZXRlY3Rvci9zcmMvbGliL25nLWlkbGUtZGV0ZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDOztBQUtsRixNQUFNLE9BQU8scUJBQXFCO0lBT2hDO1FBRE8sYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO0lBQzNDLENBQUM7SUFFVixhQUFhLENBQUMsY0FBc0I7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQ2hCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQ2hDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQzVCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQ2hDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQy9CLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsRUFDckMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFDakMsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFDaEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFDcEMsU0FBUyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFDOUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FDNUIsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRWpELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7cUlBaERVLHFCQUFxQjt5SUFBckIscUJBQXFCLGNBRnBCLE1BQU07MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QsIHRpbWVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdJZGxlRGV0ZWN0b3JTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpZGxlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIHRpbWVyJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRpbWVPdXRNaWxsaVNlY29uZHM6IG51bWJlcjtcbiAgcHJpdmF0ZSBpZGxlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIGV4cGlyZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgc3RhcnRXYXRjaGluZyh0aW1lT3V0U2Vjb25kczogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmlkbGUkID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKSxcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZWRvd24nKSxcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXByZXNzJyksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdET01Nb3VzZVNjcm9sbCcpLFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V3aGVlbCcpLFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAndG91Y2htb3ZlJyksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdNU1BvaW50ZXJNb3ZlJyksXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAnbW91c2Vtb3ZlJyksXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXG4gICAgKTtcblxuICAgIHRoaXMudGltZU91dE1pbGxpU2Vjb25kcyA9IHRpbWVPdXRTZWNvbmRzICogMTAwMDtcblxuICAgIHRoaXMuaWRsZVN1YnNjcmlwdGlvbiA9IHRoaXMuaWRsZSQuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5leHBpcmVkJDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLnRpbWVyJCA9IHRpbWVyKHRoaXMudGltZU91dE1pbGxpU2Vjb25kcykuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuZXhwaXJlZCQubmV4dCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldFRpbWVyKCkge1xuICAgIHRoaXMudGltZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICBwdWJsaWMgc3RvcFRpbWVyKCkge1xuICAgIHRoaXMudGltZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pZGxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn0iXX0=