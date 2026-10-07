import { WA_NUMBER } from "../data/content";

export const wa = (message) =>
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
