import React from "react";
import { MessageCircle } from "lucide-react";
import { wa } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <button className="fab" aria-label="Chat on WhatsApp" onClick={() => wa("Hi Leno Tech, I want to discuss a project.")}>
      <MessageCircle />
    </button>
  );
}
