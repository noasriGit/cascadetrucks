"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getTelHref, handleClickToCall } from "@/lib/analytics/click-to-call";

type PhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function PhoneLink({ children, onClick, ...props }: PhoneLinkProps) {
  const href = getTelHref();

  return (
    <a
      href={href}
      onClick={(event) => {
        handleClickToCall(event, href);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
