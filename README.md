# Intants

Human friendly dates

## Usage
~~Use your favorite node package manager; e.g. yarn, to install~~
```sh
# don't bother, package isn't published yet... :(
$ yarn add instants --dev
```

## Api docs
[https://benvh.tech/instants](https://benvh.tech/instants)

## Example 
```javascript
import { Instant, Timezone } from 'instants';

// instants are like date objects
const now = new Instant();

// instants can be jumper forward/backward in time
const tomorrow = now.days(1).later();
const yesterday = now.days(1).earlier();
const nextWeek = now.weeks(1).later();

// jumping can be chained
const fiveHoursThreeMinutesAndTwentySecondsAgo = now.hours(5).minutes(3).seconds(20).earlier();

// or whatever
const someMomentInTime = now.years(20).earlier().hours(5).minutes(10).later().days(10).earlier();

// Timezones manipulate the time that is diplayed by an Instant.
// By default the local timezone is applied.
const localTimezone = Timezone.local();

// Modify the timezone property where needed
yesterday.timezone = Timezone.CEST;

// Or use a Timezone to create Instants with the Timezone applied.
const nowUTC = Timezone.UTC.applyTo(now);
const nowPST = Timezone.PST.applyTo(now);
const nowPDT = Timezone.PDT.applyTo(now);

// You can also create your own "timezones". They're simply offsets...
yesterday.timezone = new Timezone(-4.75);
```


