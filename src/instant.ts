/**
 * @module Instants
 */
'use strict';

import { InstantJumper, InstantPeriodJumper } from './instant-jumper';
import { Timezone } from './timezone';
import { Period } from './period';

export class Instant {

    public readonly timestamp: number;
    public readonly date: Date;

    private zone: Timezone;
    private zonedDate: Date;

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

    get dayOfWeek(): number {
        return this.zonedDate.getDay();
    }

    get dayOfyear(): number {
        const beginningOfYear = Instant.fromDate(new Date(this.year, 0, 1));
        const offset = Period.fromTo(beginningOfYear.timestamp, this.timestamp);
        return Math.floor(offset.days) + 1.0;
    }

    get week(): number {
        const beginningOfYear = Instant.fromDate(new Date(this.year, 0, 1));
        const offset = Period.fromTo(beginningOfYear.timestamp, this.timestamp);
        return Math.floor(offset.weeks) + 1.0;
    }

    get month(): number {
        return this.zonedDate.getMonth() + 1;
    }

    get year(): number {
        return this.zonedDate.getFullYear();
    }

    seconds(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Second.multiply(amount));
    }

    minutes(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Minute.multiply(amount));
    }

    hours(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Hour.multiply(amount));
    }

    days(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Day.multiply(amount));
    }

    months(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Month.multiply(amount));
    }

    years(amount: number): InstantJumper {
        return new InstantPeriodJumper(this, Period.Year.multiply(amount));
    }

    toString(): string {
        const second = this.second < 10 ? `0${this.second}` : this.second;
        const minute = this.minute < 10 ? `0${this.minute}` : this.minute;
        const hour = this.hour < 10 ? `0${this.hour}`: this.hour;
        const day = this.day < 10 ? `0${this.day}` : this.day;
        const month = this.month < 10 ? `0${this.month}` : this.month;

        return `${this.year}/${month}/${day} ${hour}:${minute}:${second} ${this.timezone.toString()}`;
    }

    static fromDate(date: Date): Instant {
        return new Instant( date.getTime() / 1000.0 );
    }
}

export default Instant;
