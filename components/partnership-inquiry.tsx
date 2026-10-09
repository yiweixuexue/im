"use client";

import { useState, type FormEvent } from "react";
import styles from "./partnerships.module.css";

const email = "imartisanme@gmail.com";

export function PartnershipInquiry() {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("ImArtisan partnership enquiry");

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ["name", "Name"], ["email", "Email"], ["organization", "Organization"],
      ["website", "Website"], ["interest", "Partnership interest"], ["quantity", "Quantity / participants"],
      ["budget", "Budget per gift (USD)"], ["date", "Requested delivery / event date"],
      ["destination", "Destination / event location"], ["details", "Project details"],
    ];
    const body = "Hello ImArtisan,\n\nI would like to discuss a partnership.\n\n" +
      fields.map(([key, label]) => `${label}: ${String(data.get(key) || "Not specified").trim()}`).join("\n") +
      "\n\nPlease let me know the next steps. Thank you.";
    setSubject(`ImArtisan enquiry — ${data.get("interest")} — ${data.get("organization")}`);
    setDraft(body);
    setStatus("Your enquiry draft is ready. Open your email app or copy the text below, then send it to ImArtisan. Nothing has been sent yet.");
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("Copied. Paste this into an email to imartisanme@gmail.com and send it when you are ready.");
    } catch {
      setStatus("Please select and copy the enquiry text below, then email it to imartisanme@gmail.com.");
    }
  }

  return (
    <form className={styles.form} onSubmit={prepareDraft} onChange={() => { setDraft(""); setStatus(""); }}>
      <div className={styles.fields}>
        <label>Your name *<input name="name" autoComplete="name" required maxLength={80} /></label>
        <label>Work email *<input name="email" type="email" autoComplete="email" required maxLength={120} /></label>
        <label>Organization *<input name="organization" autoComplete="organization" required maxLength={100} /></label>
        <label>Website <span>(optional)</span><input name="website" placeholder="Your organization’s website" maxLength={150} /></label>
        <label className={styles.full}>I’m interested in *<select name="interest" required defaultValue="">
          <option value="" disabled>Select a collaboration</option>
          <option>Corporate gifts</option><option>Museum & boutique wholesale</option>
          <option>Wedding & event gifts</option><option>Cultural experience or workshop</option>
          <option>Custom collaboration</option>
        </select></label>
        <label>Quantity / participants<input name="quantity" placeholder="e.g. 50 gifts, or still exploring" maxLength={80} /></label>
        <label>Budget per gift · USD<select name="budget" defaultValue="Still exploring">
          <option>Still exploring</option><option>Under $50</option><option>$50–100</option><option>$100–200</option><option>$200+</option><option>Wholesale / program quote</option>
        </select></label>
        <label>Requested date<input name="date" type="date" /></label>
        <label>Destination / event location<input name="destination" placeholder="City, state and country" maxLength={120} /></label>
        <label className={styles.full}>Tell us about the occasion<textarea name="details" rows={4} maxLength={1500} placeholder="Who is it for? Share your occasion, preferred pieces, packaging ideas or program goals." /></label>
      </div>
      <p className={styles.formNote}>This form prepares an email draft on your device. It does not submit or store your details on this website. You choose when to send it. We use your enquiry to discuss your project; it does not subscribe you to marketing.</p>
      <button className="button button-ink" type="submit">Prepare my enquiry <span aria-hidden="true">&nbsp;→</span></button>
      <p role="status" aria-live="polite" className={styles.formNote}>{status}</p>
      {draft && <div className={styles.draft}>
        <div className={styles.actions}>
          <a className="button button-ink" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}>Open email app ↗</a>
          <button className={styles.copyButton} type="button" onClick={copyDraft}>Copy enquiry</button>
        </div>
        <label>Email draft<textarea readOnly value={draft} rows={12} onFocus={(event) => event.currentTarget.select()} /></label>
        <p>Send to <a href={`mailto:${email}`}>{email}</a>. If your email app does not open, copy the draft into your preferred email service.</p>
      </div>}
      <noscript><p>Please email your organization, occasion, quantity, budget and requested date to <a href={`mailto:${email}`}>{email}</a>.</p></noscript>
    </form>
  );
}
