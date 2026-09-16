# Do not publish until these are resolved

These were flagged in the previous review and are **unchanged in this build** — they were outside
the scope of the five requested edits. Every one is publicly verifiable by anyone who checks.

## 1. Another company's BBB accreditation and Yelp reviews — 61 links

- 59 links to `bbb.org/us/ca/irvine/profile/asset-recovery/blue-navy-recovery-1126-1000130163`
- 2 links to `yelp.com/biz/blue-navy-recovery-irvine-2`

Blue Navy Recovery is a real, unrelated company (now trading as Claimio). The site presents their
accreditation as CollectRefund's. Fix: remove the BBB badge and both Yelp links everywhere until
CollectRefund holds its own accreditation.

## 2. Notary portal points at the competitor — 6 links

`/notary/` sends applicants to `notary.bluenavy.org`. Every notary who applies is handed to a
competitor. Fix: remove `/notary/` and its nav entry until an owned portal exists.

## 3. Fabricated client recoveries with stock photos of real people

`RECOVERIES` in `/index.html`: eight named recoveries with specific amounts, illustrated with
Unsplash photographs of unrelated real people. Four are in states the site does not operate in.
Fix: set `RECOVERIES = []`, or populate only with real claims and consented photos.

## 4. Borrowed performance claims

`$7.5M+ recovered` (48×), `1,000+ clients` (11×), `250M+ records monitored` (42×),
`Backed by Techstars and USC`, office listed as `Irvine, California`.

None of these belong to this company — they are Blue Navy's and Claimio's, and Techstars/USC
backed Claimio. Fix: delete or replace with this company's own figures.

## 5. Products that do not exist

`/partners/embedded-api/`, `/partners/employee-benefit/`, `/notary/`.

## 6. Legal pages

Dated 12 November 2024, name no legal entity, no CCPA/CPRA section, not reviewed by counsel.
Terms §4 says the fee is deducted from recovered funds before remittance; the homepage says the
state pays the client directly. Those contradict, and it is a fee-disclosure contradiction in a
regulated category. Pick one and align all three.

## 7. The outbound model is invisible

Acquisition is cold-calling, but the site has no `/verify` page, no do-not-call policy, no caller-ID
disclosure, and lists the phone as "Available upon request". The FTC Telemarketing Sales Rule and
TCPA compliance surface is absent. TCPA carries $500–$1,500 per call in statutory damages.

## 8. Blog

95 article titles linking nowhere.
