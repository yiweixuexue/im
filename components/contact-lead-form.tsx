"use client";

import { useState, type FormEvent } from "react";

const submissionEndpoint = "https://formsubmit.co/ajax/imartisanme@gmail.com";

export function ContactLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(submissionEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-lead">
      <div className="contact-lead-heading">
        <p>NOT SURE WHERE TO BEGIN?</p>
        <h3>Leave your details.</h3>
        <span>We’ll reply personally by email and help you find the right next step.</span>
      </div>

      {status === "sent" ? (
        <div className="contact-lead-success" role="status" aria-live="polite">
          <strong>Thank you.</strong>
          <p>Your details have been received. We’ll reply by email within 1–2 business days.</p>
          <button type="button" onClick={() => setStatus("idle")}>Leave another enquiry</button>
        </div>
      ) : (
        <form className="contact-lead-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="ImArtisan website · New contact enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            className="form-honeypot"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="contact-lead-fields">
            <label>
              <span>Name *</span>
              <input name="name" autoComplete="name" required maxLength={80} placeholder="Your name" />
            </label>
            <label>
              <span>Email *</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={120}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <button className="button button-ink" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Leave my details"}
          </button>
          {status === "error" ? (
            <p className="contact-lead-error" role="alert">
              We couldn’t submit your details. Please try again or email us at imartisanme@gmail.com.
            </p>
          ) : null}
          <p className="contact-lead-privacy">
            We use your details only to respond to this enquiry. This does not subscribe you to marketing.
          </p>
        </form>
      )}
    </div>
  );
}
