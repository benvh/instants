import { Instant } from './instant';
/**
 * Represents an amount of time
 */
export declare class Period {
    static readonly Second: Period;
    static readonly Minute: Period;
    static readonly Hour: Period;
    static readonly Day: Period;
    static readonly Week: Period;
    static readonly Month: Period;
    static readonly Year: Period;
    /**
     * Period's duration in seconds
     */
    readonly duration: number;
    /**
     * @param {number} duration period duration in seconds.
     */
    constructor(duration: number);
    /**
     * Create a Period object that defines the amount of time in between the two given timestamps.
     * Note that this can go "backwards", so negative durations are possible... (from > to)
     */
    static fromTo(from: number, to: number): Period;
    add(period: Period): Period;
    subtract(period: Period): Period;
    multiply(amount: number): Period;
    /**
     * Creates a copy of the given instant and adds this Period's duration to it
     */
    applyTo(instant: Instant): Instant;
    /**
     * Period's duration in seconds
     */
    readonly seconds: number;
    /**
     * Period's duration in minutes
     */
    readonly minutes: number;
    /**
     * Period's duration in hours
     */
    readonly hours: number;
    /**
     * Period's duration in days
     */
    readonly days: number;
    /**
     * Period's duration in weeks
     */
    readonly weeks: number;
    /**
     * Period's duration in months
     */
    readonly months: number;
    /**
     * Period's duration in years
     */
    readonly years: number;
}
export default Period;
