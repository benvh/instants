import { InstantJumper } from './instant-jumper';
import { Timezone } from './timezone';
export declare class Instant {
    readonly timestamp: number;
    readonly date: Date;
    private zone;
    private zonedDate;
    constructor(timestamp?: number, timezone?: Timezone);
    timezone: Timezone;
    readonly second: number;
    readonly minute: number;
    readonly hour: number;
    readonly day: number;
    readonly dayOfWeek: number;
    readonly dayOfyear: number;
    readonly week: number;
    readonly month: number;
    readonly year: number;
    seconds(amount: number): InstantJumper;
    minutes(amount: number): InstantJumper;
    hours(amount: number): InstantJumper;
    days(amount: number): InstantJumper;
    months(amount: number): InstantJumper;
    years(amount: number): InstantJumper;
    toString(): string;
    static fromDate(date: Date): Instant;
}
export default Instant;
