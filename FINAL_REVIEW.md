# Meet Nest — finalized

Approved by the product owner on 10 August 2026. Finalization includes the light, dark, and system theme selector in Settings.

- [ ] Brand name, palette, and youth-oriented tone are right.
- [ ] The UPI flow is acceptable: a payment deep link starts payment, and the attendee marks it paid; the host verifies it. It does **not** prove bank settlement.
- [ ] Google and Apple OAuth client IDs, redirect URIs, and signing keys will be supplied for each environment.
- [ ] Production uses PostgreSQL with PostGIS, HTTPS, managed backups, and secret storage.
- [ ] Privacy copy and consent cover location data, event chat, payment screenshots, and account deletion.
- [ ] Mobile smoke tests pass on an Android UPI-enabled device and an iPhone.

The following release tasks still require real deployment credentials and device testing, but the application source is finalized.
