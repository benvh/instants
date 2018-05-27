import Instant from './instant';
import Period from './period';
export interface InstantJumper {
    earlier(): Instant;
    later(): Instant;
}
export declare class InstantPeriodJumper implements InstantJumper {
    private instant;
    private period;
    constructor(instant: Instant, period: Period);
    earlier(): Instant;
    later(): Instant;
}
