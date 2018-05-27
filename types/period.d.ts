import { Instant } from './instant';
export declare class Period {
    static readonly Second: Period;
    static readonly Minute: Period;
    static readonly Hour: Period;
    static readonly Day: Period;
    static readonly Week: Period;
    static readonly Month: Period;
    static readonly Year: Period;
    /**
     * period duration in seconds
     */
    readonly duration: number;
    /**
     * @param {number} duration period duration in seconds.
     */
    constructor(duration: number);
    static fromTo(from: number, to: number): Period;
    add(period: Period): Period;
    subtract(period: Period): Period;
    multiply(amount: number): Period;
    applyTo(instant: Instant): Instant;
    readonly seconds: number;
    readonly minutes: number;
    readonly hours: number;
    readonly days: number;
    readonly weeks: number;
    readonly months: number;
    readonly years: number;
}
export default Period;
