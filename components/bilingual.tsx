export function Bilingual({ zh, en, text }: { zh?: string; en?: string; text?: string }) {
 const pair = text?.split(text.includes("|||") ? "|||" : " / ");
 return <span className="bilingual"><span lang="zh-CN">{zh ?? pair?.[0]}</span>{(en ?? pair?.[1]) && <span className="bilingual-en" lang="en">{en ?? pair?.[1]}</span>}</span>;
}
