"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteImage } from "./site-image";
import { bespokeWorks, clothingOccasions, clothingTypes, type ClothingType, type ClothingOccasion, type BespokeWork } from "../data/bespoke-works";

type ClothingFilter = ClothingType | "all";
type OccasionFilter = ClothingOccasion | "all";

function BespokeCard({ work, saved, onToggle }: { work: BespokeWork; saved: boolean; onToggle: (id: string) => void }) {
  return (
    <article className="bespoke-work-card">
      <figure className="bespoke-work-image">
        <SiteImage src={work.image} alt={work.alt} loading="lazy" decoding="async" />
        <span>{work.id} · 作品参考</span>
      </figure>
      <div className="bespoke-work-content">
        <p className="bespoke-work-category">{work.category}</p>
        <h3>{work.title}</h3>
        <p className="bespoke-work-subhead">适合什么场合</p>
        <p>{work.bestFor}</p>
        <p className="bespoke-work-subhead">可以讨论哪些调整</p>
        <p>{work.choices}</p>
        <p className="bespoke-work-subhead">选择前要考虑</p>
        <p className="bespoke-work-caution">{work.consider}</p>
      </div>
      <div className="bespoke-work-actions">
        <button type="button" className={saved ? "bespoke-save bespoke-save-on" : "bespoke-save"} aria-pressed={saved} onClick={() => onToggle(work.id)}>
          {saved ? "✓ 已加入灵感清单" : "＋ 加入我的灵感清单"}
        </button>
        <Link href={"/lookbook/" + work.lookbook} className="bespoke-work-more">
          查看所属作品合集 ↗
        </Link>
      </div>
    </article>
  );
}

export function BespokeWorkLibrary() {
  const [category, setCategory] = useState<ClothingFilter>("all");
  const [occasion, setOccasion] = useState<OccasionFilter>("all");
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const selectedWorks = bespokeWorks.filter((work) => selected.includes(work.id));
  const normalized = keyword.trim().toLowerCase();
  const visible = bespokeWorks.filter((work) =>
    (category === "all" || work.type === category) &&
    (occasion === "all" || work.occasions.includes(occasion)) &&
    (!normalized || [work.title, work.category, work.bestFor, work.choices, work.consider, work.id].join(" ").toLowerCase().includes(normalized))
  );
  const summary = [
    "屮微我｜定制服装咨询参考",
    "我感兴趣的作品：",
    ...selectedWorks.map((work) => work.id + " · " + work.title),
    "",
    "我的穿着场合：",
    "希望穿着的日期：",
    "所在城市／试衣方式：",
    "预算范围（可选）：",
    "希望保留或调整的设计细节：",
    "",
    "以上为参考案例，不代表复刻现货；具体面料、版型、工艺、价格与周期需要进一步沟通确认。",
  ].join("\n");

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setCopyStatus("idle");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  function resetFilters() {
    setCategory("all"); setOccasion("all"); setKeyword("");
  }

  return (
    <>
      <section className="bespoke-library shell-wide" id="works" aria-labelledby="bespoke-library-title">
        <div className="bespoke-library-head">
          <div>
            <p className="eyebrow">BESPOKE WORKS · 穿着参考图库</p>
            <h2 id="bespoke-library-title">从作品出发，找到适合自己的方向。</h2>
          </div>
          <p>每张图片都是一次设计讨论的起点。先看穿着场景、可以调整的细节，以及试衣前需要考虑的事；不必先选定某件衣服。</p>
        </div>
        <div className="bespoke-filter-panel">
          <label>搜索作品或细节
            <input type="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="试试：旗袍、盘扣、马甲、婚礼、肩线" />
          </label>
          <label>按服装类型
            <select value={category} onChange={(e) => setCategory(e.target.value as ClothingFilter)}>
              <option value="all">所有服装类型</option>
              {clothingTypes.map((type) => <option key={type.id} value={type.id}>{type.label}</option>)}
            </select>
          </label>
          <label>按穿着场合
            <select value={occasion} onChange={(e) => setOccasion(e.target.value as OccasionFilter)}>
              <option value="all">所有穿着场合</option>
              {clothingOccasions.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </label>
          <button type="button" className="bespoke-clear" onClick={resetFilters}>清除筛选</button>
        </div>
        <div className="bespoke-results" role="status" aria-live="polite">
          <span>正在展示 <strong>{visible.length}</strong> / {bespokeWorks.length} 个作品参考</span>
          <span>已选 {selectedWorks.length} 件灵感参考</span>
        </div>
        {visible.length ? (
          <div className="bespoke-work-grid">
            {visible.map((work) =>
              <BespokeCard key={work.id} work={work} saved={selected.includes(work.id)} onToggle={toggle} />
            )}
          </div>
        ) : (
          <div className="bespoke-no-results"><h3>暂时没有符合条件的作品。</h3><p>可以尝试其他场合或服装类型；没有现成参考的想法也可以向我们提出。</p><button type="button" className="button button-ink" onClick={resetFilters}>查看所有作品</button></div>
        )}
        <p className="bespoke-catalog-note">
          图片为设计和制作参考，不是现货目录，也不代表所有相同面料、刺绣或细节均可复刻。是否接受定制及实际制作方式，均以一对一确认的方案为准。
        </p>
      </section>

      <section className="bespoke-shortlist-band" id="my-inspiration" aria-labelledby="bespoke-shortlist-title">
        <div className="shell bespoke-shortlist-grid">
          <div>
            <p className="eyebrow">YOUR INSPIRATION LIST · 我的定制灵感</p>
            <h2 id="bespoke-shortlist-title">带着喜欢的细节，开始一次对话。</h2>
            <p>不用急着选定款式。你可以保存几件参考作品，把编号与想修改的地方发给我们；也可以从自己的生活场景和穿着难题说起。</p>
            <Link href="/contact#wechat" className="button button-ink">查看微信咨询方式 →</Link>
          </div>
          <div className="bespoke-shortlist-result">
            <p className="eyebrow">{selectedWorks.length} SELECTED REFERENCES</p>
            {selectedWorks.length ? (
              <>
                <ul>
                  {selectedWorks.map((work) =>
                    <li key={work.id}><span>{work.id} · {work.title}</span><button type="button" onClick={() => toggle(work.id)} aria-label={"移除" + work.title}>移除</button></li>
                  )}
                </ul>
                <button type="button" className="button button-ink" onClick={copySummary}>复制咨询清单</button>
                {copyStatus === "copied" && <p role="status" className="bespoke-copy-feedback">已复制。可以粘贴到微信，补上日期、城市和偏好。</p>}
                {copyStatus === "error" && <p role="alert" className="bespoke-copy-feedback">浏览器未允许自动复制。你可以手动选中下方文字。</p>}
                <textarea className="bespoke-summary-text" value={summary} readOnly aria-label="可复制的定制咨询内容" rows={Math.min(10, selectedWorks.length + 8)} />
              </>
            ) : (
              <p className="bespoke-empty-shortlist">灵感清单暂时是空的。点击上方作品的「加入我的灵感清单」，这里就会列出你喜欢的参考。</p>
            )}
            <p className="bespoke-shortlist-fine">此功能仅在当前页面整理参考，不会自动发送信息或创建订单。联系时请确认可试衣条件及具体制作周期。</p>
          </div>
        </div>
      </section>
    </>
  );
}
