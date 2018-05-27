'use strict';

import { Instant } from './instant';

// 30.4166 = 365/12

/**
 * Represents an amount of time
 */
export class Period {

    public static readonly Second = new Period(1);
    public static readonly Minute = new Period(60);
    public static readonly Hour   = new Period(60*60);
    public static readonly Day    = new Period(60*60*24);
    public static readonly Week   = new Period(60*60*24*7);
    public static readonly Month  = new Period(60*60*24*30.4166);
    public static readonly Year   = new Period(60*60*24*30.4166*12);

    /**
     * Period's duration in seconds
     */
    public readonly duration: number;

    /**
     * @param {number} duration period duration in seconds.
     */
    constructor(duration: number) {
        this.duration = duration;
    }

    /**
     * Create a Period object that defines the amount of time in between the two given timestamps.
     * Note that this can go "backwards", so negative durations are possible... (from > to)
     */
    static fromTo(from: number, to: number): Period {
        const min = from;
        const max = to;
        return new Period(max - min);
    }

    add(period: Period): Period {
        return new Period(this.duration + period.duration); 
    }

    subtract(period: Period): Period {
        return new Period(this.duration - period.duration);
    }

    multiply(amount: number): Period {
        return new Period(this.duration * amount);
    }

    /**
     * Creates a copy of the given instant and adds this Period's duration to it
     */
    applyTo(instant: Instant): Instant {
        return new Instant(instant.timestamp + this.duration, instant.timezone);
    }

    /**
     * Period's duration in seconds
     */
    get seconds(): number {
        return this.duration;
    }

    /**
     * Period's duration in minutes
     */
    get minutes(): number {
        return this.duration / Period.Minute.duration;
    }

    /**
     * Period's duration in hours
     */
    get hours(): number {
        return this.duration / Period.Hour.duration;
    }

    /**
     * Period's duration in days
     */
    get days(): number {
        return this.duration / Period.Day.duration;
    }

    /**
     * Period's duration in weeks
     */
    get weeks(): number {
        return this.duration / Period.Week.duration;
    }

    /**
     * Period's duration in months
     */
    get months(): number {
        return this.duration / Period.Month.duration;
    }

    /**
     * Period's duration in years
     */
    get years(): number {
        return this.duration / Period.Year.duration;
    }
}

export default Period;
