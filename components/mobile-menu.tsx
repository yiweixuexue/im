"use client";
import type { ReactNode } from "react";
export function MobileMenu({children}:{children:ReactNode}){return <details className="mobile-menu" onClick={event=>{if((event.target as HTMLElement).closest("a")) event.currentTarget.open=false}}>{children}</details>}
