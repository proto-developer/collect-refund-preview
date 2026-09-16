# CollectRefund - launch notes

> See CHANGES.md for this redeploy and BLOCKERS.md for items that must be resolved first.

Static site. No build step. Deploy this folder as-is (Vercel config included; any static host works).

## Structure
- 26 pages, one folder each (`/individuals/`, `/unclaimed-property/california/`, ...), plus `404.html`
- `assets/css/site.css`, `assets/js/site.js`, self-hosted fonts, `og.png` (1200x630)
- `robots.txt` (indexing allowed) and `sitemap.xml`
- Domain is set to `https://collectrefund.com` in every canonical/OG tag, `robots.txt` and `sitemap.xml`. Find-and-replace if it launches elsewhere.

## Forms (backend)
Five forms: `/` (#home-contact), `/businesses/`, `/partners/`, `/partners/employee-benefit/`, `/partners/embedded-api/`.
Each needs: `action` set, `onsubmit="return false"` removed, `disabled` removed from the Send button.

## Map marker photos
Each recovery on the home page map shows a grey person placeholder until a photo is set.
1. Put the image in `assets/claimants/` (square, at least 160x160, e.g. `mk.jpg`).
2. In `/index.html`, find `RECOVERIES` and set that entry's `photo:'/assets/claimants/mk.jpg'`.
Use only photos of the actual client, with their signed consent. A missing or broken image falls back to the placeholder.

## Decide before going public
1. Payment flow: site says the state pays the client directly; Terms s.4 and Privacy say funds are remitted after the fee is deducted. Pick one and align all three.
2. Recent recoveries (home page): Washington, Texas, Illinois and Florida are shown, none of which are managed-recovery states. Confirm these are real, consented CollectRefund claims or remove them (edit `RECOVERIES` in `/index.html`).
3. Telephone shows "Available upon request" on the Verify card, contact block, Privacy and Terms.
4. Privacy and Terms are dated November 12, 2024, name no legal entity, and have not been reviewed by counsel for CollectRefund. No CCPA/CPRA section.
5. BBB, Yelp and the notary portal are under Blue Navy Recovery / bluenavy.org.
6. Blog lists 95 article titles that do not link to articles.
7. State guides: "HQ state" statements (Berkshire/Nebraska, Atlanta, Twin Cities) and Hawaii military-pay claims need a legal check. California page calls CA the largest fund while NY shows a higher total.
