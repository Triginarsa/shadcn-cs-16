"use client";

import * as React from "react";

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [copiedComponent, setCopiedComponent] = React.useState<string | null>(
    null,
  );

  const copyToClipboard = (value: string, componentId: string) => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setCopiedComponent(componentId);

      if (onCopy) {
        onCopy();
      }

      setTimeout(() => {
        setCopiedComponent(null);
      }, timeout);
    }, console.error);
  };

  const isCopied = (componentId: string) => copiedComponent === componentId;

  return { isCopied, copyToClipboard };
}
