# Domain setup

**Canonical domain: `collectrefund.com`.** Everything in the build points there — canonical tags,
`og:url`, `og:image`, `sitemap.xml`, `robots.txt`, and all `info@collectrefund.com` addresses.

## What is wired up

Redirects are configured in the Vercel dashboard (Project → Settings → Domains), not in
`vercel.json`, which only sets security headers and `trailingSlash`. Each non-canonical domain is set to
**Redirect to `collectrefund.com`** with a 308:

| Request | Goes to |
|---|---|
| `collectrefunds.com/...` | `collectrefund.com/...` |
| `www.collectrefunds.com/...` | `collectrefund.com/...` |
| `www.collectrefund.com/...` | `collectrefund.com/...` |

Paths are preserved, so `collectrefunds.com/individuals/` lands on `collectrefund.com/individuals/`.

## What you still have to do in Vercel

Redirects only fire for domains attached to the project.

1. Project → Settings → Domains
2. Add **`collectrefund.com`** and set it as the **primary** domain
3. Add `www.collectrefund.com`, `collectrefunds.com`, `www.collectrefunds.com`
4. Update each domain's nameservers/DNS at the registrar as Vercel instructs
5. Wait for SSL to issue on all four (a few minutes)

## Mail

`info@collectrefund.com` appears 68 times on the site. Set up mail on **`collectrefund.com`** —
MX records plus SPF/DKIM — or every address on the site bounces. Redirects do not forward email.

## After it is live

Clear the cached blank link preview:

- Facebook / WhatsApp: https://developers.facebook.com/tools/debug → paste `https://collectrefund.com/` → **Scrape Again**
- LinkedIn: https://www.linkedin.com/post-inspector/
- WhatsApp caches roughly 7 days; to test sooner, share `https://collectrefund.com/?v=2`

Verify the redirect from a terminal:

```
curl -sI https://collectrefunds.com/individuals/ | grep -i "^HTTP\|^location"
# expect: HTTP/2 301  +  location: https://collectrefund.com/individuals/
```

## Why this direction and not the other

Serving on `collectrefunds.com` while advertising `collectrefund.com` would mean the address bar
shows a different domain from the one that was shared or read out on the phone. For a business
whose site exists to prove it is legitimate to someone who was just cold-called, a domain mismatch
at the moment they are checking you out is the worst possible moment for it. One canonical domain,
everything else redirecting into it, is both the standard setup and the one that supports the site's
actual job.

Do not use registrar "URL masking" or frame forwarding to keep the other domain in the address bar.
It breaks the SSL padlock, breaks deep links, breaks link previews, and is the exact pattern
phishing sites use — browsers and security tooling flag it.
