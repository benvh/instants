/**
 * @module Instants
 */
'use strict';

import { InstantPeriodJumper } from './instant-period-jumper';
import { Timezone } from './timezone';
import { Period } from './period';


/**
 * Represents a moment in time
 */
export class Instant {

    public readonly timestamp: number;
    public readonly date: Date;

    private zone: Timezone;
    private zonedDate: Date;

    /**
     * @param {number} timestamp a specific moment in time. Defaults to "now"
     * @param {Timezone} timezone the timezone in which to represent this instant. Defaults to the local timezone.
     */
    constructor(timestamp?: number, timezone: Timezone = Timezone.local()) {
        if(timestamp == null) {
            this.date = new Date();
            this.timestamp = Math.floor(this.date.getTime() / 1000.0);
        } else {
            this.timestamp = timestamp;
            this.date = new Date(this.timestamp * 1000);
        }
        this.timezone = timezone;
    }

    set timezone(zone: Timezone) {
        this.zone = zone;
        this.zonedDate = new Date((this.timestamp + this.zone.offset()) * 1000);
    }

    get timezone(): Timezone {
        return this.zone;
    }

    get second(): number {
        return this.zonedDate.getSeconds();
    }

    get minute(): number {
        return this.zonedDate.getMinutes();
    }

    get hour(): number {
        return this.zonedDate.getHours();
    }
    
    get day(): number {
        return this.zonedDate.getDate();
    }

    /**
     * @returns index of the day of the week 0-6 (monday-sunday)
     */
    get dayOfWeek(): number {
        const day = this.zonedDate.getDay() - 1;
        return day < 0 ? 6 : day;
    }

    get dayOfyear(): number {
        const beginningOfYear = Instant.fromDate(new Date(this.year, 0, 1));
        const offset = Period.fromTo(beginningOfYear.timestamp, this.timestamp);
        return Math.floor(offset.days) + 1.0;
    }

    /**
     * @returns week of the month index. 1-based
     */
    get week(): number {
        const beginningOfMonth = Instant.fromDate(new Date(this.year, this.month - 1, 1));
        const beginningOfNextMonth = Instant.fromDate(new Date(this.year, this.month, 1));
        const monthLength = Period.fromTo(beginningOfMonth.timestamp, beginningOfNextMonth.timestamp);

        return Math.floor(monthLength.weeks * (this.day / monthLength.days)) + 1.0;
    }

    /**
     * week of the year index. 1-based
     */
    get weekOfYear(): number {
        const beginningOfYear = Instant.fromDate(new Date(this.year, 0, 1));
        const offset = Period.fromTo(beginningOfYear.timestamp, this.timestamp);
        return Math.floor(offset.weeks) + 1.0;
    }

    /**
     * 1-based index
     */
    get month(): number {
        return this.zonedDate.getMonth() + 1;
    }

    get year(): number {
        return this.zonedDate.getFullYear();
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of seconds
     */
    seconds(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Second.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of minutes
     */
    minutes(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Minute.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of hours
     */
    hours(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Hour.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of days
     */
    days(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Day.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of weeks
     */
    weeks(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Week.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of months
     */
    months(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Month.multiply(amount));
    }

    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of years
     */
    years(amount: number): InstantPeriodJumper {
        return new InstantPeriodJumper(this, Period.Year.multiply(amount));
    }

    toString(): string {
        const second = this.second < 10 ? `0${this.second}` : this.second;
        const minute = this.minute < 10 ? `0${this.minute}` : this.minute;
        const hour = this.hour < 10 ? `0${this.hour}`: this.hour;
        const day = this.day < 10 ? `0${this.day}` : this.day;
        const month = this.month < 10 ? `0${this.month}` : this.month;

        return `${this.year}-${month}-${day} ${hour}:${minute}:${second}${this.timezone.toString()}`;
    }

    static fromDate(date: Date): Instant {
        return new Instant(date.getTime() / 1000.0);
    }
}

export default Instant;
