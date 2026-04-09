"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalEmbedProps {
  calLink: string;
  namespace: string;
}

export function CalEmbed({ calLink, namespace }: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        styles: { branding: { brandColor: "#e63946" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
