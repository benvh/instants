import { Instant } from './instant';
export declare class Timezone {
    /**
     * Coordinate Universal Time
     */
    static readonly UTC: Timezone;
    /**
     * Pacific Standard Time (North America)
     */
    static readonly PST: Timezone;
    /**
     * Pacific Dayligt Time (North America)
     */
    static readonly PDT: Timezone;
    /**
     * Central Standard Time (North America)
     */
    static readonly CST: Timezone;
    /**
     * Eastern Standard Time (North America)
     */
    static readonly EST: Timezone;
    /**
     * Eastern Daylight time (North America)
     */
    static readonly EDT: Timezone;
    /**
     * Central European time
     */
    static readonly CET: Timezone;
    /**
     * Central European Summer Time
     */
    static readonly CEST: Timezone;
    private utcOffset;
    /**
     * @param {number} utcOffset offset relative to utc *in hours*
     */
    constructor(utcOffset: number);
    /**
     * Creates a copy of the given instant and set its timezone to this one
     */
    applyTo(instant: Instant): Instant;
    /**
     * relative offset (starting from whatever the local timezone is) to this timezone *in seconds*.
     */
    offset(): number;
    toString(): string;
    /**
     * Gets the local timezone
     */
    static local(): Timezone;
}
export default Timezone;
