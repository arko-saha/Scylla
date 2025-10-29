## Scylla — The Home of the UK’s Next Cricket Generation

### Executive Summary
Scylla is a digital talent marketplace and performance ecosystem for cricket. Players build verified professional profiles with stats and video, while scouts, coaches, clubs, and academies discover and evaluate talent efficiently. Starting in the UK, Scylla standardizes the pathway from grassroots to elite cricket and is designed to scale globally with localized networks, analytics, and services.

### What It Does
- Profiles: Players create rich digital CVs with performance stats, videos, achievements, and positions.
- Showcase: Players upload match and training clips; scouts and coaches evaluate asynchronously.
- Discovery: Registered scouts, clubs, and academies search and filter talent; shortlists and follow-ups streamline trials.
- Programs & Services: On-platform coaching, biomechanics, S&C, nutrition, mental performance, and career consultation.
- Trust: Verified profiles, structured data, and a growing elite network drive signal-to-noise and safety.

### Target Audience
- Grassroots and Youth Players: Ages ~12–23 seeking visibility, structured development, and opportunities.
- Scouts & Recruiters: County, academy, club scouts needing standardized, searchable talent data.
- Analysts & Performance Staff: Data-led evaluation, technique breakdowns, and longitudinal tracking.
- Coaches & Academies: Lead generation, service delivery, and athlete management across cohorts.

### Core Product Overview
1) Player Identity and Media
- Verified player profiles, stats snapshots, skills tags, highlights reels.
- Calls to action in UI: “Create My Player Profile” and “Get Started Free”.

2) Talent Discovery
- Searchable directory of players with filters for role, age, location, metrics.
- “Find Talent” and “Scout Network Directory” for scouts and clubs.

3) Opportunity Access
- “Find Opportunities” for trials, programs, and partner clubs/academies.
- “Career Hub” for education, CV/profile optimization, and guidance.

4) Performance & Development Services
- Technique, biomechanics, S&C, nutrition, mental coaching, wicket-keeping and spin masterclasses.
- Integrated workflows for booking, content sharing, and progress tracking.

### Services Offered (mapped to current pages)
- Player Discovery and Profiles
  - Find Talent (`find-talent.html`), Player Profile (`player-profile.html`, `player-profile-data.js`, `player-profile-script.js`).
- Opportunities & Careers
  - Find Opportunities (`find-opportunities.html`), Career Hub (`career-hub.html`), Scholarship Program (`scholarship-program.html`).
- Coaching & Development
  - Strength & Conditioning (`strength-conditioning.html`, `s-c-program.html`).
  - Nutrition Blueprint (`nutrition-blueprint.html`).
  - Mental Coaching (`mental-coaching.html`).
  - Batting Technique Analysis (`batting-technique-analysis.html`).
  - Fast Bowling Biomechanics (`fast-bowling-biomechanics.html`).
  - Wicket-Keeping Coaching (`wicket-keeping-coaching.html`).
  - Wrist Spin Masterclass (`wrist-spin-masterclass.html`).
- Performance Analytics & Scouting
  - Performance Analytics (`performance-analytics.html`).
  - Scouts’ Eye Evaluation (`scouts-eye-evaluation.html`).
  - Scout Network Directory (`scout-network-directory.html`).
- Career & Contracts
  - Profile & CV Review (`profile-cv-review.html`).
  - Find an Agent (`find-agent.html`).
  - Contract Consultation (`contract-consultation.html`).
- Elite Pathways
  - Elite Program (`elite-program.html`).
  - Placeholder/Partner Services (`placeholder-service.html`) to add modular offerings.

### Why Now
- Fragmented youth-to-elite pathways; discovery relies on inconsistent footage and informal networks.
- Mobile-first creation and consumption of sports highlights is mainstream; federations and clubs demand structured, verified data.
- Affordable video capture and wearables unlock scalable, objective performance signals.

### Revenue Model
- Freemium for Players
  - Free: Basic profile, limited video slots, discovery eligibility.
  - Plus: More media, advanced analytics snapshots, priority search placement.
  - Pro: Unlimited media, detailed reports, verified badge, discounts on services.
- Subscriptions for Scouts/Clubs
  - Team seats, advanced filters, saved searches/shortlists, collaboration tools, export.
  - Premium: Bulk outreach, API access, analytics dashboards, white-label portals.
- Services Marketplace
  - Paid assessments: technique analysis, biomechanics, S&C, nutrition, mental coaching.
  - Bookable programs: masterclasses, elite camps, trial days, scholarship intakes.
- B2B Partnerships
  - County/academy licenses, education partners, sponsorship/branding slots.
- Transaction & Platform Fees
  - Commission on bookings, paid trials, and verified report purchases.

### Go-To-Market (UK-first)
- Initial Focus: UK counties, academies, and clubs; target 150+ scouts and 50+ clubs (aligned with on-site stats).
- Acquisition Flywheel: Player highlights drive attention → scouts discover → placements validate → content fuels social growth.
- Partnerships: Counties/academies, school programs, community clubs, equipment brands.

### Global Expansion & Vision
- Playbook
  - Country pods: localized scout networks, language, currency, compliance.
  - Standardized taxonomies: roles, drills, metrics ensure cross-market comparability.
  - Partner-led onboarding: national bodies, academies, and agencies as channel partners.
- Product Readiness
  - Multi-tenant architecture, locale-aware UI, modular services catalog.
  - Data residency options and configurable verification policies.
- Priority Markets
  - South Asia, Australia/NZ, Southern Africa, Middle East—strong cricket cultures with large talent pools.
- Long-Term Vision
  - The global “LinkedIn + Hudl for Cricket”: a universal player graph, verified performance records, and opportunity rails.

### Technology & Data (high-level)
- Frontend: Responsive, performant UI with smooth profile creation, video showcase, and discovery flows.
- Verification: Tiered verification (coach, club, competition) and platform QC checks.
- Analytics: From basic stats snapshots to advanced technique/biomechanics reports; longitudinal progress tracking.
- Privacy & Trust: Role-based access, consented data sharing, audit trails; compliant with local laws.

### Roadmap
- Near Term (0–3 months)
  - Public MVP of player profiles and discovery; enable scouts’ registration and shortlists.
  - Launch core services: technique analysis, S&C, nutrition, mental coaching.
  - Basic verification and featured profiles.
- Mid Term (3–12 months)
  - Advanced scout filters, saved searches, multi-seat orgs.
  - In-app bookings, payments, and report delivery; first partner academies.
  - Performance analytics v1 and mobile capture workflows.
- Long Term (12–24 months)
  - Global country pods, localization, compliance packs.
  - API for partners; white-label portals for academies/clubs.
  - Sponsorships, scholarship pathways, and elite program scale-up.

### Risks & Mitigations
- Multi-sided Cold Start
  - Mitigation: Seed with featured talents, scout ambassadors, and early partner clubs.
- Content Quality Variance
  - Mitigation: Upload guidelines, coach verification, baseline QC, and review tools.
- Compliance & Safeguarding
  - Mitigation: Age-gating, parental consent flows, moderation, regional legal reviews.
- Monetization Balance
  - Mitigation: Keep essential discovery free; add real value at paid tiers.

### Appendix
- Page Map (key user flows)
  - Player Onboarding: `index.html` → `signup.html` → profile creation → `player-profile.html`.
  - Scout Discovery: `index.html` → `find-talent.html` → shortlist → contact.
  - Opportunities: `find-opportunities.html` → club/academy trial pages; `career-hub.html` resources.
  - Services: specialized pages for analysis, coaching, and consultations listed above.
- Terminology
  - Verified Profile: Identity and claims checked by trusted sources (coach/club/competition) or platform review.
  - Featured Talent: Curated set highlighted for discovery, aligned with platform standards.


