'use strict';

import { Instant } from './instant';

// 30.4166 = 365/12

export class Period {

    public static readonly Second = new Period(1);
    public static readonly Minute = new Period(60);
    public static readonly Hour   = new Period(60*60);
    public static readonly Day    = new Period(60*60*24);
    public static readonly Week   = new Period(60*60*24*7);
    public static readonly Month  = new Period(60*60*24*30.4166);
    public static readonly Year   = new Period(60*60*24*30.4166*12);

    /**
     * period duration in seconds
     */
    public readonly duration: number;

    /**
     * @param {number} duration period duration in seconds.
     */
    constructor(duration: number) {
        this.duration = duration;
    }

    static fromTo(from: number, to: number): Period {
        const min = Math.min(from, to);
        const max = Math.max(from, to);
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

    applyTo(instant: Instant): Instant {
        return new Instant(instant.timestamp + this.duration, instant.timezone);
    }

    get seconds(): number {
        return this.duration;
    }

    get minutes(): number {
        return this.duration / Period.Minute.duration;
    }

    get hours(): number {
        return this.duration / Period.Hour.duration;
    }

    get days(): number {
        return this.duration / Period.Day.duration;
    }

    get weeks(): number {
        return this.duration / Period.Week.duration;
    }

    get months(): number {
        return this.duration / Period.Month.duration;
    }

    get years(): number {
        return this.duration / Period.Year.duration;
    }
}

export default Period;
