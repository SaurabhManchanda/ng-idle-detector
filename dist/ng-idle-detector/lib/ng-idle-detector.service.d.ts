import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgIdleDetectorService {
    private idle$;
    private timer$;
    private timeOutMilliSeconds;
    private idleSubscription;
    expired$: Subject<boolean>;
    constructor();
    startWatching(timeOutSeconds: number): Observable<any>;
    private startTimer;
    resetTimer(): void;
    stopTimer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgIdleDetectorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgIdleDetectorService>;
}
