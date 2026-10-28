"use client";

import { Bilingual as B } from "./bilingual";
import { useState } from "react";
import Link from "next/link";
import { SiteImage } from "./site-image";
import { bespokeWorks, type ClothingType, type ClothingOccasion, type BespokeWork } from "../data/bespoke-works";
import { bespokeEnglish } from "../data/bespoke-works-en";

type Locale = "zh" | "en";
type ClothingFilter = ClothingType | "all";
type OccasionFilter = ClothingOccasion | "all";

const bilingualLabels = {
  "saved": "✓ 已加入灵感清单 / ✓ Added to inspiration list",
  "save": "＋ 加入我的灵感清单 / + Save to inspiration list",
  "reference": "作品参考 / Design reference",
  "lookbook": "查看所属作品合集 ↗ / See the full lookbook ↗",
  "bestFor": "适合什么场合 / WHERE IT WORKS BEST",
  "choices": "可以讨论哪些调整 / WHAT CAN BE CUSTOMIZED",
  "consider": "选择前要考虑 / BEFORE CHOOSING",
  "eyebrow": "穿着参考图库 / BESPOKE WORKS · THE DESIGN LIBRARY",
  "heading": "从作品出发，找到适合自己的方向。 / Find a direction that feels like you.",
  "intro": "每张图片都是一次设计讨论的起点。先看穿着场景、可以调整的细节，以及试衣前需要考虑的事；不必先选定某件衣服。 / Every photo starts a design conversation. Explore the occasions each piece suits, what you might adjust, and what to consider before a fitting.",
  "keyword": "搜索作品或细节 / Search designs or details",
  "placeholder": "试试：旗袍、盘扣、马甲、婚礼、肩线 / Try: qipao, collar, vest, wedding, shoulder",
  "garment": "按服装类型 / Garment type",
  "allGarments": "所有服装类型 / All garment types",
  "occasion": "按穿着场合 / Wearing occasion",
  "allOccasions": "所有穿着场合 / All occasions",
  "clear": "清除筛选 / Clear filters",
  "showing": "正在展示 / Showing",
  "samples": "个作品参考 / design references",
  "picked": "已选 / Saved:",
  "pickedSuffix": "件灵感参考 / references",
  "types": {
    "qipao": "旗袍与礼服 / Qipao & dresses",
    "women": "女士新中式 / Womenswear",
    "men": "男士定制 / Menswear",
    "ceremony": "婚礼与双人造型 / Wedding & couple outfits"
  },
  "occasions": {
    "everyday": "日常与通勤 / Everyday & work",
    "celebration": "婚礼、宴会与纪念 / Weddings & celebrations",
    "formal": "正式与商务 / Formal & business"
  },
  "groups": [
    {
      "id": "women",
      "eyebrow": "01 · WOMENSWEAR",
      "title": "女装 · 旗袍与日常衣橱 / Womenswear · Qipao & everyday layers",
      "intro": "从一件贴合身体的旗袍，到可以反复搭配的马甲与外套。先理解自己的生活，再决定设计细节。 / From a fitted qipao to a vest you can wear many ways: begin with your real life and let the details follow.",
      "types": [
        "qipao",
        "women"
      ]
    },
    {
      "id": "men",
      "eyebrow": "02 · MENSWEAR",
      "title": "男装 · 正装与当代中式 / Menswear · Tailoring & modern Chinese lines",
      "intro": "以肩线、比例、面料和活动舒适度为出发点，寻找得体而不拘束的男装表达。 / Proportion, shoulders, fabric and ease of movement are the starting points for clothes that feel considered rather than constrained.",
      "types": [
        "men"
      ]
    },
    {
      "id": "wedding",
      "eyebrow": "03 · COUPLE & CEREMONY",
      "title": "婚礼与双人造型 / Weddings & couple ensembles",
      "intro": "单独整理需要统筹两个人和一整天仪式的参考，不把婚礼穿搭简单归入男装或女装。 / Coordinated looks need to work across two people and a full day of events, so we keep these references in their own category.",
      "types": [
        "ceremony"
      ]
    }
  ],
  "navLabel": "按女装、男装或婚礼作品区域浏览 / Browse womenswear, menswear and wedding design sections",
  "groupCount": "件参考 / references",
  "emptyTitle": "暂时没有符合条件的作品。 / No matching examples just yet.",
  "emptyText": "可以尝试其他场合或服装类型；没有现成参考的想法也可以向我们提出。 / Try a different garment type or occasion. You can also enquire about an idea without an exact visual reference.",
  "emptyAction": "查看所有作品 / Show all designs",
  "archiveNote": "图片为设计和制作参考，不是现货目录，也不代表所有相同面料、刺绣或细节均可复刻。是否接受定制及实际制作方式，均以一对一确认的方案为准。 / These are examples of past design work, not ready-to-ship inventory or a guarantee of exact reproduction. Every garment is discussed individually, including material, fit, technique, price and timing.",
  "shortlistEyebrow": "我的定制灵感 / YOUR INSPIRATION LIST",
  "shortlistTitle": "带着喜欢的细节，开始一次对话。 / Begin with what catches your eye.",
  "shortlistIntro": "不用急着选定款式。你可以保存几件参考作品，把编号与想修改的地方发给我们；也可以从自己的生活场景和穿着难题说起。 / Save a few references and bring their IDs and the changes you have in mind to a consultation. You can also start with a practical wardrobe need.",
  "wechat": "查看微信咨询方式 → / WeChat consultation details →",
  "selectedTitle": "SELECTED REFERENCES",
  "remove": "移除 / Remove",
  "copy": "复制咨询清单 / Copy consultation notes",
  "copied": "已复制。可以粘贴到微信，补上日期、城市和偏好。 / Copied. Paste these notes into WeChat and add your dates, location and preferences.",
  "copyError": "浏览器未允许自动复制。你可以手动选中下方文字。 / Clipboard access was blocked. You can select and copy the text below manually.",
  "summaryLabel": "可复制的定制咨询内容 / Copyable bespoke consultation notes",
  "none": "灵感清单暂时是空的。点击上方作品的「加入我的灵感清单」，这里就会列出你喜欢的参考。 / Nothing saved yet. Choose a piece above to add it to your inspiration list.",
  "privacy": "此功能仅在当前页面整理参考，不会自动发送信息或创建订单。联系时请确认可试衣条件及具体制作周期. / Your shortlist stays in this page session. Nothing is sent or ordered automatically; fitting arrangements and production timing are confirmed through direct communication."
};
const categories = ["qipao", "women", "men", "ceremony"] as const;
const occasions = ["everyday", "celebration", "formal"] as const;

function localized(work: BespokeWork, locale: Locale) {
  return locale === "en" ? { ...work, ...bespokeEnglish[work.id] } : work;
}

function BespokeCard({ work, saved, onToggle, locale }: {
  work: BespokeWork; saved: boolean; onToggle: (id: string) => void; locale: Locale;
}) {
  const t = bilingualLabels, w = localized(work, locale);
  return (
    <article className="bespoke-work-card">
      <figure className="bespoke-work-image">
        <SiteImage src={work.image} alt={w.alt} loading="lazy" decoding="async" />
        <span>{work.id} · <B text={t.reference} /></span>
      </figure>
      <div className="bespoke-work-content">
        <p className="bespoke-work-category"><B zh={work.category} en={bespokeEnglish[work.id].category} /></p>
        <h3><B zh={work.title} en={bespokeEnglish[work.id].title} /></h3>
        <p className="bespoke-work-subhead"><B text={t.bestFor} /></p><p><B zh={work.bestFor} en={bespokeEnglish[work.id].bestFor} /></p>
        <p className="bespoke-work-subhead"><B text={t.choices} /></p><p><B zh={work.choices} en={bespokeEnglish[work.id].choices} /></p>
        <p className="bespoke-work-subhead"><B text={t.consider} /></p><p className="bespoke-work-caution"><B zh={work.consider} en={bespokeEnglish[work.id].consider} /></p>
      </div>
      <div className="bespoke-work-actions">
        <button type="button" className={saved ? "bespoke-save bespoke-save-on" : "bespoke-save"} aria-pressed={saved} onClick={() => onToggle(work.id)}>{saved ? t.saved : t.save}</button>
        <Link href={"/lookbook/" + work.lookbook} className="bespoke-work-more"><B text={t.lookbook} /></Link>
      </div>
    </article>
  );
}

export function BespokeWorkLibrary({ locale = "zh" }: { locale?: Locale }) {
  const t = bilingualLabels;
  const [category, setCategory] = useState<ClothingFilter>("all");
  const [occasion, setOccasion] = useState<OccasionFilter>("all");
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const selectedWorks = bespokeWorks.filter((work) => selected.includes(work.id));
  const normalized = keyword.trim().toLowerCase();
  const visible = bespokeWorks.filter((work) => {
    const text = {...work, title: work.title + " " + bespokeEnglish[work.id].title, category: work.category + " " + bespokeEnglish[work.id].category, bestFor: work.bestFor + " " + bespokeEnglish[work.id].bestFor, choices: work.choices + " " + bespokeEnglish[work.id].choices, consider: work.consider + " " + bespokeEnglish[work.id].consider};
    return (category === "all" || work.type === category)
      && (occasion === "all" || work.occasions.includes(occasion))
      && (!normalized || [text.title, text.category, text.bestFor, text.choices, text.consider, work.id].join(" ").toLowerCase().includes(normalized));
  });
  const groups = t.groups.map((group) => ({
    ...group,
    works: visible.filter((work) => (group.types as readonly string[]).includes(work.type)),
  })).filter((group) => group.works.length > 0);
  const summary = locale === "zh" ? [
    "屮微我｜定制服装咨询参考 / Bespoke consultation", "我感兴趣的作品 / Selected references:",
    ...selectedWorks.map((work) => work.id + " · " + work.title + " / " + bespokeEnglish[work.id].title),
    "", "我的穿着场合 / Occasion:", "希望穿着的日期 / Wearing date:", "所在城市／试衣方式 / City & fitting:",
    "预算范围（可选） / Budget (optional):", "希望保留或调整的设计细节 / Details to retain or adjust:", "",
    "以上为参考案例，不代表复刻现货；具体面料、版型、工艺、价格与周期需要进一步沟通确认。",
  ].join("\n") : [
    "ImArtisan · Bespoke clothing consultation", "Design references of interest:",
    ...selectedWorks.map((work) => work.id + " · " + bespokeEnglish[work.id].title),
    "", "Occasion:", "Desired wearing date:", "City / fitting arrangements:",
    "Budget range (optional):", "Details to retain or adjust:", "",
    "Examples are for inspiration rather than ready-made stock or guaranteed reproductions. Materials, fit, technique, pricing and lead time require confirmation.",
  ].join("\n");

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setCopyStatus("idle");
  }
  async function copySummary() {
    try { await navigator.clipboard.writeText(summary); setCopyStatus("copied"); }
    catch { setCopyStatus("error"); }
  }
  function resetFilters() { setCategory("all"); setOccasion("all"); setKeyword(""); }

  return (
    <>
      <section className="bespoke-library shell-wide" id="works" aria-labelledby="bespoke-library-title">
        <div className="bespoke-library-head">
          <div><p className="eyebrow"><B text={t.eyebrow} /></p><h2 id="bespoke-library-title"><B text={t.heading} /></h2></div>
          <p><B text={t.intro} /></p>
        </div>
        <div className="bespoke-filter-panel">
          <label><B text={t.keyword} />
            <input type="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder={t.placeholder} />
          </label>
          <label><B text={t.garment} />
            <select value={category} onChange={(e) => setCategory(e.target.value as ClothingFilter)}>
              <option value="all">{t.allGarments}</option>
              {categories.map((type) => <option key={type} value={type}>{t.types[type]}</option>)}
            </select>
          </label>
          <label><B text={t.occasion} />
            <select value={occasion} onChange={(e) => setOccasion(e.target.value as OccasionFilter)}>
              <option value="all">{t.allOccasions}</option>
              {occasions.map((o) => <option key={o} value={o}>{t.occasions[o]}</option>)}
            </select>
          </label>
          <button type="button" className="bespoke-clear" onClick={resetFilters}><B text={t.clear} /></button>
        </div>
        <div className="bespoke-results" role="status" aria-live="polite">
          <span className="bespoke-result-count"><B text={t.showing} /><strong>{visible.length}{visible.length !== bespokeWorks.length ? ` / ${bespokeWorks.length}` : ""}</strong><B text={t.samples} /></span>
          <span className="bespoke-result-count"><B text={t.picked} /><strong>{selectedWorks.length}</strong><B text={t.pickedSuffix} /></span>
        </div>
        {visible.length ? <>
          <nav className="bespoke-groups-nav" aria-label={t.navLabel}>
            {groups.map((group) => <a key={group.id} href={"#" + group.id}><B text={group.title} /><span>{group.works.length} <B text={t.groupCount} /></span></a>)}
          </nav>
          {groups.map((group) => <section className="bespoke-work-section" id={group.id} key={group.id} aria-labelledby={"bespoke-" + group.id + "-title"}>
            <div className="bespoke-group-heading">
              <div><p className="eyebrow"><B text={group.eyebrow} /></p><h3 id={"bespoke-" + group.id + "-title"}><B text={group.title} /></h3></div>
              <p><B text={group.intro} /></p>
            </div>
            <div className="bespoke-work-grid">
              {group.works.map((work) => <BespokeCard key={work.id} work={work} saved={selected.includes(work.id)} onToggle={toggle} locale={locale} />)}
            </div>
          </section>)}
        </> : <div className="bespoke-no-results">
          <h3><B text={t.emptyTitle} /></h3><p><B text={t.emptyText} /></p>
          <button type="button" className="button button-ink" onClick={resetFilters}><B text={t.emptyAction} /></button>
        </div>}
        <p className="bespoke-catalog-note"><B text={t.archiveNote} /></p>
      </section>
      <section className="bespoke-shortlist-band" id="my-inspiration" aria-labelledby="bespoke-shortlist-title">
        <div className="shell bespoke-shortlist-grid">
          <div>
            <p className="eyebrow"><B text={t.shortlistEyebrow} /></p>
            <h2 id="bespoke-shortlist-title"><B text={t.shortlistTitle} /></h2>
            <p><B text={t.shortlistIntro} /></p>
            <Link href="/contact#wechat" className="button button-ink"><B text={t.wechat} /></Link>
          </div>
          <div className="bespoke-shortlist-result">
            <p className="eyebrow">{selectedWorks.length} <B text={t.selectedTitle} /></p>
            {selectedWorks.length ? <>
              <ul>{selectedWorks.map((work) => <li key={work.id}>
                <span>{work.id} · <B zh={work.title} en={bespokeEnglish[work.id].title} /></span>
                <button type="button" onClick={() => toggle(work.id)} aria-label={t.remove + " " + localized(work, locale).title}><B text={t.remove} /></button>
              </li>)}</ul>
              <button type="button" className="button button-ink" onClick={copySummary}><B text={t.copy} /></button>
              {copyStatus === "copied" && <p role="status" className="bespoke-copy-feedback"><B text={t.copied} /></p>}
              {copyStatus === "error" && <p role="alert" className="bespoke-copy-feedback"><B text={t.copyError} /></p>}
              <textarea className="bespoke-summary-text" value={summary} readOnly aria-label={t.summaryLabel} rows={Math.min(10, selectedWorks.length + 8)} />
            </> : <p className="bespoke-empty-shortlist"><B text={t.none} /></p>}
            <p className="bespoke-shortlist-fine"><B text={t.privacy} /></p>
          </div>
        </div>
      </section>
    </>
  );
}
