export function Bilingual({ zh, en, text }: { zh?: string; en?: string; text?: string }) {
 const pair = text?.split(text.includes("|||") ? "|||" : " / ");
 const primary = zh ?? pair?.[0];
 const secondary = en ?? pair?.[1];
 return <span className="bilingual"><span lang="zh-CN">{primary}</span>{secondary && secondary.trim() !== primary?.trim() && <span className="bilingual-en" lang="en">{secondary}</span>}</span>;
}
