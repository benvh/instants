/**
 * @module Instants
 */
'use strict';

import Instant from './instant';
import Period from './period';

export interface InstantJumper {
    earlier(): Instant;
    later(): Instant;
}

export class InstantPeriodJumper implements InstantJumper {

    private instant: Instant;
    private period: Period;

    constructor(instant: Instant, period: Period) {
        this.instant = instant;
        this.period = period;
    }

    earlier(): Instant {
        return new Instant(this.instant.timestamp - this.period.duration, this.instant.timezone);
    }

    later(): Instant {
        return new Instant(this.instant.timestamp + this.period.duration, this.instant.timezone);
    }
}

