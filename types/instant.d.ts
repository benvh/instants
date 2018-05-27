import { InstantPeriodJumper } from './instant-period-jumper';
import { Timezone } from './timezone';
/**
 * Represents a moment in time
 */
export declare class Instant {
    readonly timestamp: number;
    readonly date: Date;
    private zone;
    private zonedDate;
    /**
     * @param {number} timestamp a specific moment in time. Defaults to "now"
     * @param {Timezone} timezone the timezone in which to represent this instant. Defaults to the local timezone.
     */
    constructor(timestamp?: number, timezone?: Timezone);
    timezone: Timezone;
    readonly second: number;
    readonly minute: number;
    readonly hour: number;
    readonly day: number;
    /**
     * @returns index of the day of the week 0-6 (monday-sunday)
     */
    readonly dayOfWeek: number;
    readonly dayOfyear: number;
    /**
     * @returns week of the month index. 1-based
     */
    readonly week: number;
    /**
     * week of the year index. 1-based
     */
    readonly weekOfYear: number;
    /**
     * 1-based index
     */
    readonly month: number;
    readonly year: number;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of seconds
     */
    seconds(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of minutes
     */
    minutes(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of hours
     */
    hours(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of days
     */
    days(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of weeks
     */
    weeks(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of months
     */
    months(amount: number): InstantPeriodJumper;
    /**
     * Create an InstantJumper that jumps this instant forward/backward `amount` of years
     */
    years(amount: number): InstantPeriodJumper;
    toString(): string;
    static fromDate(date: Date): Instant;
}
export default Instant;
