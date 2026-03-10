"use client";

import React from "react";
import { siteData } from "@/data/siteData";

const WhatsAppFloat = () => {
    // Standard WhatsApp link format: https://wa.me/number
    // We'll use the first phone number from siteData, stripping non-numeric characters except +
    const phoneNumber = siteData.company.contact.phones[0].replace(/[^0-9]/g, "");

    return (
        <div className="wa-float">
            <a
                href={`https://wa.me/88${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
            >
                <div className="wa-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
            </a>
        </div>
    );
};

export default WhatsAppFloat;
