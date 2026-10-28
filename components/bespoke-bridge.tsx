"use client";
import { useEffect } from "react";
export function BespokeBridge(){useEffect(()=>{window.location.replace((process.env.NEXT_PUBLIC_BASE_PATH ?? "")+"/cn/custom/"+window.location.search+window.location.hash)},[]);return null;}
