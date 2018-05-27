'use strict';

import { Instant } from './instant';
import { Period } from './period';

export class Timezone {

    /**
     * Coordinate Universal Time
     */
    public static readonly UTC = new Timezone(0);

    /**
     * Pacific Standard Time (North America)
     */
    public static readonly PST = new Timezone(-8);

    /**
     * Pacific Dayligt Time (North America)
     */
    public static readonly PDT = new Timezone(-7);

    /**
     * Central Standard Time (North America)
     */
    public static readonly CST = new Timezone(-6)

    /**
     * Eastern Standard Time (North America)
     */
    public static readonly EST = new Timezone(-5);

    /**
     * Eastern Daylight time (North America)
     */
    public static readonly EDT = new Timezone(-4);
    
    /**
     * Central European time
     */
    public static readonly CET = new Timezone(1);

    /**
     * Central European Summer Time
     */
    public static readonly CEST = new Timezone(2);


    private utcOffset: Period;

    /**
     * @param {number} utcOffset offset relative to utc *in hours*
     */
    constructor(utcOffset: number) {
        this.utcOffset = Period.Hour.multiply(utcOffset);
    }

    /**
     * Creates a copy of the given instant and set its timezone to this one
     */
    applyTo(instant: Instant): Instant {
        const newInstant = new Instant(instant.timestamp, instant.timezone);
        newInstant.timezone = this;
        return newInstant;
    }

    /**
     * relative offset (starting from whatever the local timezone is) to this timezone *in seconds*.
     */
    offset(): number {
        const localOffset = Period.Minute.multiply((new Date()).getTimezoneOffset());
        const offset = localOffset.add(this.utcOffset);
        return offset.seconds;
    }

    toString():string {
        let str = '';
        const hours = this.utcOffset.hours;
        const absHours = Math.abs(hours);
        const minutes = absHours - Math.floor(absHours);

        if(hours < 0) {
            str += '-'
        } else {
            str += '+'
        }

        if(Math.abs(hours) < 10) {
            str += '0'; 
        }

        str += Math.floor(absHours);

        if (minutes > 0) {
            str += `${Math.round(60 * minutes)}`;
        } else {
            str += '00';
        }

        return str;
    }

    /**
     * Gets the local timezone
     */
    static local(): Timezone {
        const offset = Period.Minute.multiply(-(new Date()).getTimezoneOffset());
        return new Timezone(offset.hours);
    }
}

export default Timezone;
