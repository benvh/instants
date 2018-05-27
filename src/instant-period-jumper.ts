/**
 * @module Instants
 */
'use strict';

import Instant from './instant';
import Period from './period';


/**
 * InstantJumper that makes use of Periods to jump instants.
 */
export class InstantPeriodJumper {

    private instant: Instant;
    private period: Period;

    /**
     * @param {Instant} instant the starting instant
     * @param {Period} period the amount of time that has to be jumped
     */
    constructor(instant: Instant, period: Period) {
        this.instant = instant;
        this.period = period;
    }

    /**
     * Create an instant jumping backwards in time
     */
    earlier(): Instant {
        return new Instant(this.instant.timestamp - this.period.duration, this.instant.timezone);
    }

    /**
     * Create an instant jumping forward in time
     */
    later(): Instant {
        return new Instant(this.instant.timestamp + this.period.duration, this.instant.timezone);
    }

    /**
     * Extend/Reduce the jump be <amount> seconds
     */
    seconds(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Second.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> minutes
     */
    minutes(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Minute.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> hours
     */
    hours(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Hour.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> days
     */
    days(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Day.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> weeks
     */
    weeks(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Week.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> months
     */
    months(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Month.multiply(amount) );
        return this;
    }

    /**
     * Extend/Reduce the jump by <amount> years
     */
    years(amount: number): InstantPeriodJumper {
        this.period = this.period.add( Period.Year.multiply(amount) );
        return this;
    }
}

export default InstantPeriodJumper;
