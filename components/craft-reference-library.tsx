"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteImage } from "./site-image";
import {
  catalog, crafts, uses, statusLabels,
  type CatalogEntry, type CatalogStatus, type CraftId, type UseId,
} from "../data/heritage-catalog";

type CraftFilter = CraftId | "all";
type UseFilter = UseId | "all";
type StatusFilter = CatalogStatus | "all";

const etsyShop = "https://www.etsy.com/shop/ImArtisanStudio";

function StatusTag({ status }: { status: CatalogStatus }) {
  return (
    <span className={"reference-status reference-status-" + status}>
      {statusLabels[status]}
    </span>
  );
}

function ReferenceCard({
  item,
  isSelected,
  onToggle,
}: {
  item: CatalogEntry;
  isSelected: boolean;
  onToggle: (id: string) => void;
}) {
  const craft = crafts.find((entry) => entry.id === item.craft);
  if (!craft) return null;
  return (
    <article className="reference-card">
      <figure className="reference-card-image">
        <SiteImage src={item.image} alt={item.alt} loading="lazy" decoding="async" />
        <StatusTag status={item.status ?? craft.status} />
      </figure>
      <div className="reference-card-body">
        <p className="reference-card-meta">
          {item.id} · {item.form}
        </p>
        <h3>{item.name}</h3>
        <p className="reference-card-uses">
          {item.uses.map((use) => uses.find((u) => u.id === use)?.label).filter(Boolean).join(" · ")}
        </p>
        <p className="reference-card-label">HOW IT CAN BE USED</p>
        <p>{item.howToUse}</p>
        <p className="reference-card-label">BEFORE CHOOSING</p>
        <p className="reference-card-consideration">{item.consideration}</p>
      </div>
      <div className="reference-card-actions">
        <button
          className={isSelected ? "reference-save reference-save-on" : "reference-save"}
          type="button"
          aria-pressed={isSelected}
          onClick={() => onToggle(item.id)}
        >
          {isSelected ? "✓ Added to shortlist" : "+ Add to enquiry shortlist"}
        </button>
        <Link href={craft.href} className="reference-detail-link">
          Craft details <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export function CraftReferenceLibrary() {
  const [searchText, setSearchText] = useState("");
  const [expandedCrafts, setExpandedCrafts] = useState<CraftId[]>([]);
  const [craftFilter, setCraftFilter] = useState<CraftFilter>("all");
  const [useFilter, setUseFilter] = useState<UseFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const query = searchText.trim().toLowerCase();
  const filtered = catalog.filter((item) => {
    const craft = crafts.find((entry) => entry.id === item.craft);
    const haystack = [item.name, item.form, item.howToUse, item.consideration, craft?.label, craft?.subtitle, item.id]
      .join(" ").toLowerCase();
    return (!query || haystack.includes(query))
      && (craftFilter === "all" || craftFilter === item.craft)
      && (useFilter === "all" || item.uses.includes(useFilter))
      && (statusFilter === "all" || (item.status ?? craft?.status) === statusFilter);
  });

  function toggle(id: string) {
    setSelectedIds((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  }

  const selectedEntries = catalog.filter((entry) => selectedIds.includes(entry.id));
  const enquirySubject = "ImArtisan · Craft reference enquiry";
  const enquiryBody = [
    "Hello ImArtisan,",
    "",
    "I am interested in the following craft references:",
    ...selectedEntries.map((entry) => {
      const craft = crafts.find((c) => c.id === entry.craft);
      return "- " + entry.id + " · " + entry.name + " (" + (craft?.label || "") + ", " + (entry.status ?? craft?.status ?? "") + ")";
    }),
    "",
    "My organisation / project:",
    "Intended use / audience:",
    "Estimated quantity:",
    "Approximate budget:",
    "Requested delivery / event date:",
    "Destination:",
    "",
    "I understand these are reference examples rather than confirmed stock or production offers, and that availability, pricing, materials and lead times need confirmation.",
    "",
    "Thank you.",
  ].join("\n");
  const enquiryHref = "mailto:imartisanme@gmail.com?subject=" +
    encodeURIComponent(enquirySubject) + "&body=" + encodeURIComponent(enquiryBody);

  return (
    <>
      <section className="reference-browser shell-wide" aria-label="Browse craft examples">
        <div className="reference-filters">
          <div className="reference-filters-head">
            <div>
              <p className="eyebrow">DISCOVER BY TECHNIQUE OR PURPOSE</p>
              <h2>Find the form that fits.</h2>
            </div>
            <p>Filter by craft, intended use or collection stage. Browse real examples and build a shortlist to discuss with us.</p>
          </div>
          <div className="reference-control-row">
            <label htmlFor="reference-search" className="reference-search">Search examples
              <input
                id="reference-search"
                type="search"
                placeholder="Try brooch, teapot, vase or wedding"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </label>
            <label htmlFor="reference-craft">Craft
              <select id="reference-craft" value={craftFilter} onChange={(event) => setCraftFilter(event.target.value as CraftFilter)}>
                <option value="all">All crafts</option>
                {crafts.map((craft) => <option key={craft.id} value={craft.id}>{craft.label}</option>)}
              </select>
            </label>
            <label htmlFor="reference-use">Where it belongs
              <select id="reference-use" value={useFilter} onChange={(event) => setUseFilter(event.target.value as UseFilter)}>
                <option value="all">All uses</option>
                {uses.map((use) => <option key={use.id} value={use.id}>{use.label}</option>)}
              </select>
            </label>
            <label htmlFor="reference-status">Collection stage
              <select id="reference-status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}>
                <option value="all">All stages</option>
                <option value="available">Available collections</option>
                <option value="coming">Coming soon</option>
                <option value="past">Past collection</option>
                <option value="reference">Reference works</option>
              </select>
            </label>
            <button
              type="button"
              className="reference-reset"
              onClick={() => { setSearchText(""); setCraftFilter("all"); setUseFilter("all"); setStatusFilter("all"); }}
            >
              Clear filters
            </button>
          </div>
          <div className="reference-count-line">
            <p role="status" aria-live="polite">
              Showing <strong>{filtered.length}</strong> of {catalog.length} documented examples
            </p>
            <p>{selectedIds.length} selected for enquiry</p>
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="reference-empty">
            <h2>No matching examples yet.</h2>
            <p>Try another craft or use. Our visual archive will expand as product details are confirmed.</p>
            <button type="button" className="button button-ink" onClick={() => { setSearchText(""); setCraftFilter("all"); setUseFilter("all"); setStatusFilter("all"); }}>
              View all examples
            </button>
          </div>
        )}

        <div className="reference-craft-groups">
          {crafts.map((craft) => {
            const group = filtered.filter((entry) => entry.craft === craft.id);
            if (!group.length) return null;
            const isExpanded = expandedCrafts.includes(craft.id);
            const shown = isExpanded ? group : group.slice(0, 6);
            return (
              <section key={craft.id} id={craft.id} className="reference-craft-group" aria-labelledby={"reference-" + craft.id}>
                <div className="reference-group-intro">
                  <div>
                    <p className="eyebrow">{craft.subtitle}</p>
                    <h2 id={"reference-" + craft.id}>{craft.label}</h2>
                    <StatusTag status={craft.status} />
                  </div>
                  <div>
                    <p>{craft.summary}</p>
                    <Link href={craft.href} className="arrow-link">
                      Explore this craft <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="reference-grid">
                  {shown.map((item) => (
                    <ReferenceCard key={item.id} item={item} isSelected={selectedIds.includes(item.id)} onToggle={toggle} />
                  ))}
                </div>
                {group.length > 6 && (
                  <button
                    type="button"
                    className="reference-load-more"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedCrafts((current) =>
                      current.includes(craft.id) ? current.filter((id) => id !== craft.id) : [...current, craft.id])}
                  >
                    {isExpanded ? "Show fewer examples" : "Show all " + group.length + " examples"} <span aria-hidden="true">→</span>
                  </button>
                )}
              </section>
            );
          })}
        </div>
      </section>

      <section className="reference-shortlist" aria-labelledby="reference-shortlist-title">
        <div className="shell reference-shortlist-grid">
          <div>
            <p className="eyebrow">FROM INSPIRATION TO A CONVERSATION</p>
            <h2 id="reference-shortlist-title">Your enquiry shortlist.</h2>
            <p>
              Save reference examples you want to discuss. We will help determine what can be sourced,
              adapted or developed, and whether quantities, costs and timing are feasible.
            </p>
          </div>
          <div className="reference-shortlist-detail">
            {selectedEntries.length ? (
              <>
                <p className="reference-shortlist-count">{selectedEntries.length} reference{selectedEntries.length === 1 ? "" : "s"} selected</p>
                <ul>
                  {selectedEntries.map((item) => (
                    <li key={item.id}>
                      <span><strong>{item.id}</strong> · {item.name}</span>
                      <button type="button" onClick={() => toggle(item.id)} aria-label={"Remove " + item.name + " from enquiry"}>Remove</button>
                    </li>
                  ))}
                </ul>
                <a href={enquiryHref} className="button button-ink">Prepare enquiry email ↗</a>
                <p className="reference-shortlist-note">This opens a draft in your email app. Nothing is submitted or sent automatically.</p>
              </>
            ) : (
              <p className="reference-shortlist-placeholder">
                Your shortlist is empty. Select a few examples above to start an enquiry.
              </p>
            )}
            <Link href="/en/partnerships#inquiry" className="arrow-link">
              Explore wholesale & gifting partnerships <span aria-hidden="true">→</span>
            </Link>
            <a className="reference-etsy" href={etsyShop} target="_blank" rel="noopener noreferrer">
              Browse available collections on Etsy ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
