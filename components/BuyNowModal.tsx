"use client";

import { useState } from "react";

export default function BuyNowModal() {
  const [isOn, setIsOn] = useState(true);
  const [payNow, setPayNow] = useState("15");
  const [payLater, setPayLater] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#b0b8c8" }}>
      <div className="w-[340px] bg-white rounded-[20px] overflow-hidden font-sans shadow-lg">

        <div className="px-5 pt-5 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">Buy Now</span>
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-sm hover:bg-gray-50">
            ✕
          </button>
        </div>

        <div className="px-5 pt-4 pb-3 flex gap-4 items-center">
          <div className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a8d8a0, #7ec8e3)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#6bb8d4" }}>
              <div className="w-8 h-8 rounded-full border-2" style={{ background: "#f5c842", borderColor: "#e8a020" }} />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Doodles #15317</p>
            <p className="text-sm font-medium text-gray-900 mb-0.5">Lowest Price: 15 ETH</p>
            <p className="text-sm text-gray-500 mb-0.5">($25,000)</p>
            <p className="text-xs text-gray-400">On Parallel</p>
          </div>
        </div>

        <div className="h-px bg-gray-100 mx-5" />

        <div className="px-5 pt-4 pb-2">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-sm text-gray-500">Pay Now</span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <span className="text-indigo-500">⬡</span> ETH
            </span>
          </div>
          <div className="bg-gray-50 rounded-xl px-3.5 py-3 flex items-center justify-between mb-1.5">
            <input
              type="number"
              value={payNow}
              onChange={(e) => setPayNow(e.target.value)}
              className="text-xl font-medium text-gray-900 bg-transparent outline-none w-24"
              placeholder="0"
            />
            <button className="text-xs font-medium px-3 py-1 rounded-lg" style={{ background: "#e8e8ff", color: "#4f46e5" }}>
              Max
            </button>
          </div>
          <p className="text-xs text-gray-300 text-right mb-4">Balance: 10</p>

          <div className="flex justify-between items-center mb-2.5">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              Pay Later
              <span className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-flex items-center justify-center text-[9px] text-gray-400">i</span>
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <span className="text-indigo-500">⬡</span> ETH
            </span>
          </div>
          <div className="bg-gray-50 rounded-xl px-3.5 py-3 flex items-center justify-between mb-1.5">
            <input
              type="number"
              value={payLater}
              onChange={(e) => setPayLater(e.target.value)}
              className="text-xl font-medium text-gray-300 bg-transparent outline-none w-24"
              placeholder="0"
            />
            <button className="text-xs font-medium px-3 py-1 rounded-lg" style={{ background: "#e8e8ff", color: "#4f46e5" }}>
              Max
            </button>
          </div>
          <p className="text-xs text-gray-300 text-right mb-4">Limit: 7.5</p>
        </div>

        <div className="mx-5 rounded-xl p-4 mb-4" style={{ background: "#f9f9fb" }}>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              Total Pay
              <span className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-flex items-center justify-center text-[9px] text-gray-400">i</span>
            </span>
            <span className="text-sm font-medium text-gray-900">15 ETH</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Borrow APY</span>
            <span className="text-sm font-medium text-gray-900">0%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">OMNI APY</span>
            <span className="text-sm font-medium text-gray-900">6%</span>
          </div>
        </div>

        <div className="px-5 pb-5">
          <div className="flex items-start gap-2.5 mb-5">
            <div className="w-5 h-5 flex-shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" fill="#4f46e5"/>
                <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs text-gray-500 flex-1 leading-relaxed">
              Supply the purchased NFT to the Money Market to earn 8.5% OMNI Rewards.
            </p>
            <button
              onClick={() => setIsOn(!isOn)}
              className="flex-shrink-0 w-10 h-[22px] rounded-full relative transition-colors mt-0.5"
              style={{ background: isOn ? "#4f46e5" : "#ccc" }}
            >
              <div
                className="w-[18px] h-[18px] bg-white rounded-full absolute top-0.5 transition-all"
                style={{ right: isOn ? "2px" : "20px" }}
              />
            </button>
          </div>

          <button className="w-full py-4 text-white text-base font-medium rounded-2xl hover:opacity-90 transition-opacity" style={{ background: "#3730d4" }}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
