import type { FaqItem } from "@/components/Faq";

/**
 * Blog content lives here as typed data — no CMS, no markdown pipeline.
 * To publish: copy a post object, edit, push. Inline links use
 * [text](/path) / [text](https://…) and are rendered by the article page.
 */

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "callout"; x: string }
  | { t: "quote"; x: string; by?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  minutes: number;
  keywords: string[];
  lede: string;
  blocks: Block[];
  faq: FaqItem[];
};

export const POSTS: Post[] = [
  {
    slug: "google-business-profile-suspended-what-to-do",
    title: "Google Business Profile Suspended? Exactly What to Do (2026)",
    description:
      "Your Google Business Profile got suspended and your business vanished from Maps. Here's how to diagnose the suspension type, avoid the mistakes that make it worse, and file an appeal that actually gets reviewed.",
    date: "2026-08-13",
    minutes: 9,
    keywords: [
      "Google Business Profile suspended",
      "GBP suspended what to do",
      "Google Business Profile suspension",
      "fix suspended Google Business Profile",
      "GBP appeal",
    ],
    lede: "One morning the profile is fine. The next, there's a red banner, your listing is gone from Maps, and the phone goes quiet. A Google Business Profile suspension erases your business from local search overnight — but most suspensions are recoverable, and the first moves you make decide how fast.",
    blocks: [
      { t: "h2", x: "First: which kind of suspension do you have?" },
      {
        t: "p",
        x: "Google issues two very different suspensions, and the recovery path depends on which one hit you.",
      },
      {
        t: "ul",
        x: [
          "**Soft suspension** — you can still sign in and edit, but the profile shows as \"suspended\" and stops appearing in search and Maps. Your listing is unverified, not deleted.",
          "**Hard suspension** — the profile is removed from Maps entirely, often with reviews hidden. This usually signals Google believes the business violates a core guideline (or looks like it does).",
        ],
      },
      {
        t: "p",
        x: "Check which banner and email you received before doing anything else. Appealing a hard suspension with soft-suspension logic — or vice versa — is one of the most common reasons first appeals fail.",
      },
      { t: "h2", x: "Why Google suspended you (the real triggers)" },
      {
        t: "p",
        x: "Google almost never tells you the exact reason. After hundreds of reinstatements, these are the triggers behind the vast majority of suspensions:",
      },
      {
        t: "ul",
        x: [
          "**Address problems** — virtual offices, co-working spaces, PO boxes, or a home address on a service-area business that also displays it.",
          "**Category conflicts** — a primary category that doesn't match what the business visibly does, or categories added too aggressively.",
          "**A burst of edits** — changing name, address, categories, and hours in one sitting looks like a hijacking attempt to Google's systems.",
          "**Duplicate listings** — a second profile for the same business at the same address, even an old forgotten one.",
          "**Keyword stuffing in the business name** — \"Smith Plumbing | Best Emergency Plumber Austin TX 24/7\" is a suspension waiting to happen.",
          "**Regulated or high-risk industries** — locksmiths, garage doors, lawyers, rehab, financial services get extra scrutiny by default.",
          "**New users or managers added recently** — ownership changes are a classic fraud signal.",
        ],
      },
      { t: "h2", x: "What to do, step by step" },
      {
        t: "ol",
        x: [
          "**Stop editing immediately.** Every additional edit while suspended re-flags the profile and can convert a quick case into a long one.",
          "**Screenshot everything** — the suspension banner, the email, your current profile data. You'll need the record if the case escalates.",
          "**Diagnose the trigger** — go through the list above honestly. Compare your profile against [Google's business eligibility guidelines](https://support.google.com/business/answer/3038177). The appeal must answer the actual problem, not proclaim innocence.",
          "**Fix the root cause first** — wrong category? Correct it. Duplicate? Identify it. Stuffed name? Restore the real-world name. Appealing before fixing guarantees a denial.",
          "**Assemble evidence before filing** — business license or registration, a utility bill matching the exact profile address, photos of permanent signage and the storefront or vehicles, and a website whose name-address-phone matches the profile to the letter.",
          "**File one complete appeal** — through Google's appeals tool, attaching everything at once. You typically get one upload moment; drip-feeding documents later is not an option.",
          "**Wait like a professional** — most decisions arrive within days to two weeks. Filing again while a case is open resets you to the back of the queue.",
        ],
      },
      { t: "h2", x: "What NOT to do" },
      {
        t: "callout",
        x: "Do not create a new profile. It starts from zero reviews and zero ranking history, it usually gets suspended too (same signals, same address), and it can poison the reinstatement case for your original listing. This is the single most damaging panic move.",
      },
      {
        t: "ul",
        x: [
          "Don't file thin, repeated appeals — \"my business is legitimate, please restore\" with no evidence burns your credibility for the appeals that follow.",
          "Don't buy \"guaranteed 24-hour reinstatement\" from strangers — nobody outside Google controls the queue, and guarantee language is the tell of a scam.",
          "Don't rage-edit the profile to \"look cleaner\" mid-review — reviewers see edit history.",
        ],
      },
      { t: "h2", x: "How long does reinstatement take?" },
      {
        t: "p",
        x: "Honest numbers, based on real cases: clean soft suspensions with strong evidence often resolve in **3–14 days**. Hard suspensions, duplicates, or profiles with a failed appeal already on record typically run **3 weeks to 3 months**. Anyone quoting a flat fast turnaround for every case is guessing with your business.",
      },
      { t: "h2", x: "When to bring in help" },
      {
        t: "p",
        x: "If your appeal already failed, if you can't identify the trigger, or if a duplicate is involved, the do-it-yourself odds drop sharply — each weak appeal makes the next one harder. That's the exact situation my [GBP reinstatement service](/gbp-reinstatement) exists for: diagnosis, an evidence pack built the way Google's reviewers expect, and escalation beyond the standard queue. The suspension review is free either way.",
      },
    ],
    faq: [
      {
        q: "Will my reviews come back after reinstatement?",
        a: "Yes. A proper reinstatement restores the profile with its full review history and ranking signals. Reviews only get lost when owners give up and create a new profile from scratch — which is precisely why creating a new listing is the worst response to a suspension.",
      },
      {
        q: "Should I just create a new Google Business Profile instead?",
        a: "No. A new profile starts with zero reviews and zero history, is usually re-suspended because it shares the same signals and address as the suspended one, and can complicate the original profile's reinstatement case. Reinstating the original is almost always the right path.",
      },
      {
        q: "Does Google tell you why your profile was suspended?",
        a: "Almost never — the suspension email cites \"quality issues\" or a generic guideline violation without specifics. Diagnosing the actual trigger (address setup, categories, duplicates, edit bursts, or industry risk) is the first real step of any successful appeal.",
      },
      {
        q: "How many times can I appeal a GBP suspension?",
        a: "There's no published hard limit, but each denied appeal makes the next one harder, because reviewers see the history. Treat the first appeal as the one that counts: root cause fixed, complete evidence pack, filed once.",
      },
      {
        q: "How much does professional reinstatement help cost?",
        a: "It's scoped after a free review of the suspension notice and profile history, because a first-time soft suspension and a twice-denied hard suspension are entirely different projects. A diagnosis comes before any commitment.",
      },
    ],
  },
  {
    slug: "gbp-appeal-denied-how-to-get-reinstated",
    title: "GBP Appeal Denied? How to Still Get Reinstated (2026)",
    description:
      "A denied Google Business Profile appeal isn't the end. Why most self-filed appeals fail, what Google's reviewers actually look for in an evidence pack, and how profiles get recovered after one — or two — denials.",
    date: "2026-08-13",
    minutes: 8,
    keywords: [
      "GBP appeal denied",
      "Google Business Profile appeal rejected",
      "GBP reinstatement after failed appeal",
      "Google Business Profile appeal failed",
      "GBP evidence for appeal",
    ],
    lede: "The email says your appeal was reviewed and the decision stands. It reads like a final verdict. It isn't — a large share of the profiles I reinstate had already been denied once or twice before the owner got help. A denial usually means the appeal was weak, not that the case is dead.",
    blocks: [
      { t: "h2", x: "Why most self-filed appeals fail" },
      {
        t: "ol",
        x: [
          "**Wrong diagnosis.** The appeal argues about legitimacy when the trigger was an address setup, or defends the address when the trigger was a category conflict. Google's reviewer denies anything that doesn't answer the actual violation.",
          "**Weak or wrongly formatted evidence.** A phone photo of a crumpled letter, a utility bill that doesn't match the profile address exactly, a business license under a different name — each one reads as confirmation that something is off.",
          "**The root cause was never fixed.** Appealing a keyword-stuffed name without changing the name, or a duplicate situation without resolving the duplicate, is asking Google to approve the violation.",
          "**Template pleading.** \"We are a real business, please reinstate us\" appears in thousands of appeals a day. It carries zero evidentiary weight.",
        ],
      },
      { t: "h2", x: "What Google's reviewers actually want to see" },
      {
        t: "p",
        x: "Reinstatements are won on evidence. A pack that gets approved looks like this — every document consistent with every other, and all of them consistent with the profile:",
      },
      {
        t: "ul",
        x: [
          "**Official business registration or license** — exact legal or trading name matching the profile name.",
          "**A recent utility bill or lease** — the service address matching the profile address character for character.",
          "**Photos of permanent signage** — storefront, office door, or vehicle branding; \"permanent\" is the operative word.",
          "**Interior and exterior photos** — proving real operations at the address.",
          "**A live website** — with name, address, and phone identical to the profile (this NAP consistency gets checked).",
        ],
      },
      {
        t: "p",
        x: "Formatting matters more than owners expect: clear scans, one PDF or image per document, named intelligibly. The reviewer spends minutes on your case — make those minutes effortless.",
      },
      { t: "h2", x: "Rebuilding the case after a denial" },
      {
        t: "ol",
        x: [
          "**Audit before re-filing.** Re-diagnose the trigger from scratch, assuming the first diagnosis was wrong — it usually was.",
          "**Fix what the profile is actually guilty of.** Name, categories, address representation, duplicates. The profile must be compliant *before* the next appeal is filed.",
          "**Build a fresh evidence pack** — not the same attachments resubmitted. Same evidence, same outcome.",
          "**Escalate past the standard queue.** Denied cases can be raised through Google Business Profile community escalation and support channels most owners never touch. This is where experienced help earns its keep — an escalation with a clean, documented case history gets read differently.",
        ],
      },
      { t: "h2", x: "The duplicate-listing trap" },
      {
        t: "p",
        x: "Duplicates deserve special mention because owners make them worse under stress: they delete the duplicate — and its reviews — or create yet another listing. The right move is a **merge**, which consolidates reviews onto the surviving profile. One real case from my Fiverr history:",
      },
      {
        t: "quote",
        x: "Even after I accidentally created a duplicate listing, he managed to reinstate my original business and merge the duplicate with all of its reviews. The level of service was exceptional.",
        by: "georgiafrances0 · United Kingdom · verified Fiverr review",
      },
      { t: "h2", x: "Do you keep your reviews? Your rankings?" },
      {
        t: "p",
        x: "When the original profile is reinstated — yes, both. The review history and the ranking signals return with it. That's the entire argument for fighting a denial instead of starting over:",
      },
      {
        t: "quote",
        x: "Was in a tough situation with a client's GBP getting suspended — both appeals failed. Glad I made the decision to hire Manthar to go to bat with Google. His knowledge led us to a full restore of the profile with all of the hard-earned reviews we had.",
        by: "neverpeakmedia · United States · verified Fiverr review",
      },
      { t: "h2", x: "Honest timelines after a failed appeal" },
      {
        t: "p",
        x: "Post-denial cases are slower than fresh ones: typically **3 weeks to 3 months**, depending on how much damage the earlier appeals did and whether duplicates are involved. Fast outcomes still happen when the root cause is simple and the new evidence is strong — but plan for a campaign, not a coin flip.",
      },
      { t: "h2", x: "The takeaway" },
      {
        t: "p",
        x: "A denied appeal is feedback, not a verdict. Diagnose again, fix the real violation, rebuild the evidence, escalate properly. And if you'd rather have someone who has run this play hundreds of times, my [GBP reinstatement service](/gbp-reinstatement) starts with a free review of your suspension history — you'll know the diagnosis before you spend anything.",
      },
    ],
    faq: [
      {
        q: "My GBP appeal was denied twice. Is reinstatement still possible?",
        a: "Usually, yes. Most multi-denial cases fail on weak evidence or a wrong diagnosis rather than on the merits. A rebuilt evidence pack answering the actual trigger, plus escalation beyond the standard appeals queue, has recovered profiles whose owners had been denied twice before seeking help.",
      },
      {
        q: "How do I escalate a denied Google Business Profile appeal?",
        a: "After a denial, cases can be raised through the Google Business Profile Help Community's product experts and through Google's support escalation channels — routes most business owners never use. Escalation works when the case file is clean: root cause fixed, complete evidence, documented appeal history.",
      },
      {
        q: "Can I submit the same evidence again after a denial?",
        a: "You can, but you shouldn't — the same evidence produces the same outcome. A denial means the pack didn't prove what the reviewer needed. The re-appeal needs either new documents or the same facts presented to answer the actual suspension trigger.",
      },
      {
        q: "Should I give up and build a new profile after failed appeals?",
        a: "Almost never. A new profile loses every review and ranking signal, tends to get re-suspended for the same underlying reasons, and can undermine the original case. Starting over is the last resort after reinstatement is genuinely exhausted — which, after only one or two self-filed appeals, it is not.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
