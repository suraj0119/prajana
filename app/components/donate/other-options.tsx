"use client"

import { DecorativeHeart } from "../decorative-heart"
import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"
import { useState } from "react"

export function OtherOptions() {
  const [copied, setCopied] = useState(false)

  const copyBankDetails = () => {
    const bankDetails = `
Name of Account: PRAJNA FOUNDATION
Savings Account #: 0149-000-100-282-430
IFSC Code: PUNB-00-14-900
Bank: Punjab National Bank
Branch: Khan Market
Address: 27, Khan Market, New Delhi-110003
    `.trim()

    navigator.clipboard.writeText(bankDetails)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Other Ways to Donate</h2>
        <p className="font-raleway text-gray-600">Choose the donation method that works best for you.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Net Banking (IMPS/NEFT/RTGS)</h3>
          <div className="space-y-2 mb-6">
            <p className="font-raleway text-gray-600">
              <strong>Name of Account:</strong> PRAJNA FOUNDATION
            </p>
            <p className="font-raleway text-gray-600">
              <strong>Savings Account #:</strong> 0149-000-100-282-430
            </p>
            <p className="font-raleway text-gray-600">
              <strong>IFSC Code:</strong> PUNB-00-14-900
            </p>
            <p className="font-raleway text-gray-600">
              <strong>Bank:</strong> Punjab National Bank
            </p>
            <p className="font-raleway text-gray-600">
              <strong>Branch:</strong> Khan Market
            </p>
            <p className="font-raleway text-gray-600">
              <strong>Address:</strong> 27, Khan Market, New Delhi-110003
            </p>
          </div>
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2"
            onClick={copyBankDetails}
          >
            <Clipboard className="h-4 w-4" />
            {copied ? "Copied!" : "Copy Bank Details"}
          </Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Cheque or Bank Draft</h3>
          <p className="font-raleway text-gray-600 mb-6">
            You may download the Donation Form, print it, fill it and attach the cheque/draft in favour of PRAJNA
            FOUNDATION and post it to:
          </p>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <p className="font-raleway text-gray-600 font-medium">
              Prajna Foundation,
              <br />
              206 Raj Tower-1, Alaknanda Comm. Centre,
              <br />
              New Delhi-110019
            </p>
          </div>
          <Button
            className="w-full bg-accent-yellow text-primary hover:bg-accent-yellow/90 flex items-center justify-center gap-2"
            onClick={() =>
              window.open("https://web.archive.org/web/20250309182930/https://www.topsappliance.net/lander", "_blank")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Donation Form
          </Button>
        </div>
      </div>
    </div>
  )
}
