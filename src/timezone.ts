'use strict';

import { Instant } from './instant';
import { Period } from './period';

export class Timezone {

    private utcOffset: Period;

    public static readonly UTC = new Timezone(0);
    public static readonly PST = new Timezone(-8);
    public static readonly PDT = new Timezone(-7);
    public static readonly CST = new Timezone(-6)
    public static readonly EST = new Timezone(-5);
    public static readonly EDT = new Timezone(-4);
    public static readonly CET = new Timezone(1);
    public static readonly CEST = new Timezone(2);

    /**
     * @param {number} utcOffset offset relative to utc *in hours*
     */
    constructor(utcOffset: number) {
        this.utcOffset = Period.Hour.multiply(utcOffset);
    }

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

    static local(): Timezone {
        const offset = Period.Minute.multiply(-(new Date()).getTimezoneOffset());
        return new Timezone(offset.hours);
    }
}


// some default timezones...
//export const UTC = new Timezone(0);
//export const PST = new Timezone(-8);
//export const PDT = new Timezone(-7);
//export const CST = new Timezone(-6)
//export const EST = new Timezone(-5);
//export const EDT = new Timezone(-4);
//export const CET = new Timezone(1);
//export const CEST = new Timezone(2);
