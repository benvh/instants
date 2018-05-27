import Instant from './instant';
import Period from './period';
/**
 * InstantJumper that makes use of Periods to jump instants.
 */
export declare class InstantPeriodJumper {
    private instant;
    private period;
    /**
     * @param {Instant} instant the starting instant
     * @param {Period} period the amount of time that has to be jumped
     */
    constructor(instant: Instant, period: Period);
    /**
     * Create an instant jumping backwards in time
     */
    earlier(): Instant;
    /**
     * Create an instant jumping forward in time
     */
    later(): Instant;
    /**
     * Extend/Reduce the jump be <amount> seconds
     */
    seconds(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> minutes
     */
    minutes(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> hours
     */
    hours(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> days
     */
    days(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> weeks
     */
    weeks(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> months
     */
    months(amount: number): InstantPeriodJumper;
    /**
     * Extend/Reduce the jump by <amount> years
     */
    years(amount: number): InstantPeriodJumper;
}
export default InstantPeriodJumper;
