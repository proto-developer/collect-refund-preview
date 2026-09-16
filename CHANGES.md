# Change log — this redeploy

## 1 + 2. Coverage: all 50 states

- `OPERATING_STATES` in `/index.html` now contains all 50 states + DC. Every state lights up on the map.
- Stat block: `Managed-recovery states / 7` → **`Managed-recovery states / 50`**.
- Map legend label → "Managed recovery in available". Section label → "Managed recovery states".
- 36 seven-state sentences replaced sitewide with all-50-states + DC coverage.

**Important — read this before publishing.** The claims are written as **Managed recovery in
coverage**, not managed recovery. That distinction is deliberate and it is the only version of
"50 states" that is safe to publish today:

- Searching and monitoring public state unclaimed-property records requires **no licence anywhere**.
  Claiming 50-state coverage for that is true and costs nothing.
- **Managed recovery is licence-gated.** Several states require finder registration before you may
  solicit an owner or handle a claim (Pennsylvania requires Treasury certification; North Carolina
  requires a licensed finder plus a licensed private investigator with notarised signatures; others
  require a PI licence). This company currently holds **zero registrations in zero states**.
- The old "7" was not this company's number — it was carried over from Blue Navy / Claimio.

If you want managed recovery listed for a state, add it once that state's registration is granted.
The honest pattern is: 50 states searched and monitored, managed recovery in the states where
you are registered.

## 3. Email + domain

- `info@collectrefunds.com` → **`info@collectrefund.com`** (68 instances).
- All canonical, `og:url`, `sitemap.xml` and `robots.txt` references unified to `collectrefund.com`.

**Action required:** the site is currently served from `collectrefunds.com` (with an s). Deploy this
build on **`collectrefund.com`** and 301-redirect the `-s` variant to it. Mail for
`@collectrefund.com` must be configured on that domain or every address on the site bounces.

## 4. Social / WhatsApp link preview

The preview was blank because `og:image` pointed at `https://collectrefund.com/assets/og.png`
while the site was served from `collectrefunds.com` — the scraper fetched a URL that did not
resolve. Unifying the domain (above) is the fix. Also added:

- `og:image:type`, `og:image:alt`, `og:locale`
- `twitter:image`, `twitter:title`, `twitter:description` (some scrapers ignore OG fallbacks)

`assets/og.png` is 1200×630, 125 KB — inside WhatsApp's limits.

After deploying, re-scrape so the cached blank preview is cleared:
- Facebook / WhatsApp: developers.facebook.com/tools/debug → Scrape Again
- WhatsApp caches for ~7 days; test with a fresh URL such as `?v=2` if needed.

## 5. Map legend

"Not currently available" key removed. One key remains: "Managed recovery in available".
