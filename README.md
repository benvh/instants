# Intants

Human friendly dates.


```javascript
import { Instant, Timezone } from 'instants';

const now = new Instant();
const tomorrow = now.days(1).later();
const yesterday = now.days(1).earlier();
const nextWeek = now.days(7).later();

const nowUTC = Timezone.UTC.applyTo(now);
const nowPST = Timezone.PST.applyTo(now);
const nowPDT = Timezone.PDT.applyTo(now);
```

