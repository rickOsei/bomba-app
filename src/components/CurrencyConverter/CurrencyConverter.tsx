"use client";

import { useState, useEffect } from "react";
import { DeductionIcon, TimeIcon } from "@/assets/icons";

interface Currency {
  code: string;
  name: string;
  flag: string;
  icon: string;
}

const CurrencyConverter = () => {
  const [sendAmount, setSendAmount] = useState(1000);
  const [sendCurrency, setSendCurrency] = useState("GBP");
  const [receiveCurrency, setReceiveCurrency] = useState("GHS");
  const [exchangeRate, setExchangeRate] = useState(12.0);
  const [isLoading, setIsLoading] = useState(false);

  const currencies: Currency[] = [
    { code: "GBP", name: "British Pound", flag: "🇬🇧", icon: "/flags/gb.svg" },
    { code: "USD", name: "US Dollar", flag: "🇺🇸", icon: "/flags/us.svg" },
    { code: "EUR", name: "Euro", flag: "🇪🇺", icon: "/flags/eu.svg" },
    { code: "GHS", name: "Ghanaian Cedi", flag: "🇬🇭", icon: "/flags/gh.svg" },
    { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", icon: "/flags/ng.svg" },
  ];

  // Current market exchange rates (as of 2024)
  const currentRates: { [key: string]: { [key: string]: number } } = {
    GBP: {
      GHS: 12.15,
      USD: 1.27,
      EUR: 1.17,
      NGN: 1875,
    },
    USD: {
      GHS: 9.57,
      GBP: 0.79,
      EUR: 0.92,
      NGN: 1475,
    },
    EUR: {
      GHS: 10.38,
      USD: 1.09,
      GBP: 0.85,
      NGN: 1600,
    },
    GHS: {
      GBP: 0.082,
      USD: 0.104,
      EUR: 0.096,
      NGN: 154,
    },
    NGN: {
      GBP: 0.00053,
      USD: 0.00068,
      EUR: 0.000625,
      GHS: 0.0065,
    },
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [sendCurrency, receiveCurrency]);

  const fetchExchangeRate = async () => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      if (
        currentRates[sendCurrency] &&
        currentRates[sendCurrency][receiveCurrency]
      ) {
        setExchangeRate(currentRates[sendCurrency][receiveCurrency]);
      } else {
        // Fallback rate
        setExchangeRate(12.0);
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setExchangeRate(12.0);
    } finally {
      setIsLoading(false);
    }
  };

  const fee = sendAmount * 0.01; // 1% fee
  const totalToPay = sendAmount + fee;
  const receiveAmount = sendAmount * exchangeRate;

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="max-w-4xl lg:max-w-7xl px-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className=" flex-col gap-2 flex lg:hidden">
            <p className="text-foreground font-normal leading-[24px]">
              Why Bomba?
            </p>
            <h3 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Send & Receive money on your own terms
            </h3>
          </div>
          {/* Converter Interface */}
          <div className="bg-white rounded-2xl w-full lg:p-8  lg:flex-1">
            <div className="space-y-0">
              {/* You Send */}
              <div className="space-y-3">
                <div className="relative">
                  <div className="relative">
                    <input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-0 py-4 border text-primary border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-xl font-medium"
                      placeholder="You send"
                    />
                    <label className="absolute left-5 text-[10px] bg-white px-2 top-0 transform -translate-y-1/2 text-[#8C8C8C] text-sm">
                      You send
                    </label>
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 bg-primary text-white px-3 py-2 rounded-md">
                    <span className="text-lg">
                      {currencies.find((c) => c.code === sendCurrency)?.flag}
                    </span>
                    <select
                      value={sendCurrency}
                      onChange={(e) => setSendCurrency(e.target.value)}
                      className="bg-transparent border-none text-white font-medium focus:outline-none text-sm"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Fee Information */}
              <div className="flex items-center justify-start relative px-8">
                <div className="w-px h-16 bg-gray-300"></div>
                <div className="absolute flex items-center space-x-2 bg-white left-6 top-1/2 transform -translate-y-1/2 py-1">
                  <div className="flex items-center space-x-2 w-4 h-4 rounded-full bg-[#0a0a0a] p-1">
                    <DeductionIcon />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {formatCurrency(fee, sendCurrency)} Fee
                  </span>
                </div>
              </div>

              {/* Recipient Gets */}
              <div className="space-y-3">
                <div className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      value={formatNumber(receiveAmount)}
                      readOnly
                      className="w-full pl-8 pr-0 py-4 border text-primary border-gray-300 rounded-lg bg-gray-50 text-xl font-medium"
                      placeholder="Recipient Gets"
                    />
                    <label className="absolute left-5 text-[10px] bg-white px-2 top-0 transform -translate-y-1/2 text-[#8C8C8C] text-sm">
                      Recipient Gets
                    </label>
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 bg-primary text-white px-3 py-2 rounded-md">
                    <span className="text-lg">
                      {currencies.find((c) => c.code === receiveCurrency)?.flag}
                    </span>
                    <select
                      value={receiveCurrency}
                      onChange={(e) => setReceiveCurrency(e.target.value)}
                      className="bg-transparent border-none text-white font-medium focus:outline-none text-sm"
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Conversion Details */}
              <div className=" rounded-lg p-4 space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs md:text-sm font-normal text-left text-[#6F6F6F] mb-1">
                      Amount we&apos;ll convert
                    </p>
                    <p className="font-normal text-[14px] md:text-[18px] text-left text-primary">
                      {formatCurrency(sendAmount, sendCurrency)}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-end space-x-2 mb-1">
                      <TimeIcon />
                      <p className="text-xs md:text-sm font-normal text-right text-[#6F6F6F]">
                        Guaranteed rate (1 hrs)
                      </p>
                    </div>
                    <p className="font-normal text-[14px] md:text-[18px] text-right text-primary">
                      {sendCurrency}1 / {receiveCurrency}
                      {exchangeRate.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs md:text-sm font-normal text-left text-[#6F6F6F] mb-1">
                      Total to Pay
                    </p>
                    <p className="font-normal text-[14px] md:text-[18px] text-left text-primary">
                      {formatCurrency(totalToPay, sendCurrency)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-normal text-right text-[#6F6F6F] mb-1">
                      Average duration
                    </p>
                    <p className="font-normal text-[14px] md:text-[18px] text-right text-primary">
                      Instant
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200">
                Get started for free
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 flex-1">
            <div className=" flex-col gap-2 hidden lg:flex">
              <p className="text-foreground font-normal leading-[24px]">
                Why Bomba?
              </p>
              <h3 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Send & Receive money on your own terms
              </h3>
            </div>
            <p className="text-lg leading-relaxed font-normal text-foreground">
              Bomba provides you the luxury of sending money at rates that suit
              you. You can easily send and swap money between{" "}
              <span className="font-medium">GBP</span>,
              <span className="font-medium">USD</span>,
              <span className="font-medium">NGN</span> and up to 20 other
              African countries using Bomba&apos;s &apos;
              <span className="text-secondary">Swap</span>&apos; and &apos;
              <span className="text-secondary">Express</span>&apos; services.
              Beat bank rates, save time and gain more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
