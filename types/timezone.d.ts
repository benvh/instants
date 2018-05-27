import { Instant } from './instant';
export declare class Timezone {
    private utcOffset;
    static readonly UTC: Timezone;
    static readonly PST: Timezone;
    static readonly PDT: Timezone;
    static readonly CST: Timezone;
    static readonly EST: Timezone;
    static readonly EDT: Timezone;
    static readonly CET: Timezone;
    static readonly CEST: Timezone;
    /**
     * @param {number} utcOffset offset relative to utc *in hours*
     */
    constructor(utcOffset: number);
    applyTo(instant: Instant): Instant;
    /**
     * relative offset (starting from whatever the local timezone is) to this timezone *in seconds*.
     */
    offset(): number;
    toString(): string;
    static local(): Timezone;
}
