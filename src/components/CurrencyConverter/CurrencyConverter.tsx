"use client";

import { useState, useEffect } from "react";

interface Currency {
  code: string;
  name: string;
  flag: string;
}

const CurrencyConverter = () => {
  const [sendAmount, setSendAmount] = useState(1000);
  const [sendCurrency, setSendCurrency] = useState("GBP");
  const [receiveCurrency, setReceiveCurrency] = useState("GHS");
  const [exchangeRate, setExchangeRate] = useState(12.0);
  const [isLoading, setIsLoading] = useState(false);

  const currencies: Currency[] = [
    { code: "GBP", name: "British Pound", flag: "🇬🇧" },
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GHS", name: "Ghanaian Cedi", flag: "🇬🇭" },
    { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬" },
    { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪" },
    { code: "ZAR", name: "South African Rand", flag: "🇿🇦" },
    { code: "XOF", name: "West African CFA", flag: "🇧🇯" },
    { code: "XAF", name: "Central African CFA", flag: "🇨🇲" },
    { code: "UGX", name: "Ugandan Shilling", flag: "🇺🇬" },
    { code: "TZS", name: "Tanzanian Shilling", flag: "🇹🇿" },
    { code: "RWF", name: "Rwandan Franc", flag: "🇷🇼" },
    { code: "CDF", name: "Congolese Franc", flag: "🇨🇩" },
    { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬" },
    { code: "MAD", name: "Moroccan Dirham", flag: "🇲🇦" },
    { code: "ETB", name: "Ethiopian Birr", flag: "🇪🇹" },
    { code: "ZMW", name: "Zambian Kwacha", flag: "🇿🇲" },
    { code: "MZN", name: "Mozambican Metical", flag: "🇲🇿" },
    { code: "AOA", name: "Angolan Kwanza", flag: "🇦🇴" },
    { code: "BIF", name: "Burundian Franc", flag: "🇧🇮" },
    { code: "LSL", name: "Lesotho Loti", flag: "🇱🇸" },
    { code: "MWK", name: "Malawian Kwacha", flag: "🇲🇼" },
    { code: "SCR", name: "Seychellois Rupee", flag: "🇸🇨" },
    { code: "SLL", name: "Sierra Leonean Leone", flag: "🇸🇱" },
    { code: "SZL", name: "Eswatini Lilangeni", flag: "🇸🇿" },
    { code: "ZWL", name: "Zimbabwean Dollar", flag: "🇿🇼" },
  ];

  // Mock exchange rates (in a real app, these would come from an API)
  const mockRates: { [key: string]: { [key: string]: number } } = {
    GBP: {
      GHS: 12.0,
      USD: 1.25,
      EUR: 1.15,
      NGN: 1850,
      KES: 180,
      ZAR: 23.5,
      XOF: 750,
      XAF: 750,
      UGX: 4800,
      TZS: 3200,
      RWF: 1500,
      CDF: 2500,
      EGP: 38.5,
      MAD: 12.5,
      ETB: 70.5,
      ZMW: 25.8,
      MZN: 80.2,
      AOA: 1050,
      BIF: 3500,
      LSL: 23.5,
      MWK: 2100,
      SCR: 17.2,
      SLL: 25000,
      SZL: 23.5,
      ZWL: 4500,
    },
    USD: {
      GHS: 9.6,
      GBP: 0.8,
      EUR: 0.92,
      NGN: 1480,
      KES: 144,
      ZAR: 18.8,
      XOF: 600,
      XAF: 600,
      UGX: 3840,
      TZS: 2560,
      RWF: 1200,
      CDF: 2000,
      EGP: 30.8,
      MAD: 10.0,
      ETB: 56.4,
      ZMW: 20.6,
      MZN: 64.2,
      AOA: 840,
      BIF: 2800,
      LSL: 18.8,
      MWK: 1680,
      SCR: 13.8,
      SLL: 20000,
      SZL: 18.8,
      ZWL: 3600,
    },
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [sendCurrency, receiveCurrency]);

  const fetchExchangeRate = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call an API like:
      // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${sendCurrency}`);
      // const data = await response.json();
      // setExchangeRate(data.rates[receiveCurrency]);

      // For now, using mock data
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay

      if (mockRates[sendCurrency] && mockRates[sendCurrency][receiveCurrency]) {
        setExchangeRate(mockRates[sendCurrency][receiveCurrency]);
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Converter Interface */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send & Receive money on your own terms
            </h2>

            <div className="space-y-6">
              {/* Send Amount */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  You send
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <span className="text-2xl">
                      {currencies.find((c) => c.code === sendCurrency)?.flag}
                    </span>
                    <select
                      value={sendCurrency}
                      onChange={(e) => setSendCurrency(e.target.value)}
                      className="bg-transparent border-none text-gray-700 font-medium focus:outline-none"
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

              {/* Exchange Rate Indicator */}
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </div>

              {/* Receive Amount */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  They receive
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={receiveAmount.toFixed(2)}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                    placeholder="0.00"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <span className="text-2xl">
                      {currencies.find((c) => c.code === receiveCurrency)?.flag}
                    </span>
                    <select
                      value={receiveCurrency}
                      onChange={(e) => setReceiveCurrency(e.target.value)}
                      className="bg-transparent border-none text-gray-700 font-medium focus:outline-none"
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

              {/* Exchange Details */}
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">A fee of</span>
                  <span className="font-medium">
                    {formatCurrency(fee, sendCurrency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    1 {sendCurrency} = {exchangeRate.toFixed(2)}{" "}
                    {receiveCurrency}
                  </span>
                  <span className="text-gray-500">
                    {isLoading ? "Updating..." : "Live rate"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total to pay</span>
                  <span className="font-semibold text-lg">
                    {formatCurrency(totalToPay, sendCurrency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Arrives in</span>
                  <span className="text-green-600 font-medium">10 mins</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
                Get started for free
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Send & Receive money on your own terms
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bomba offers you the luxury of sending money at rates that will
              get you to your destination easily. Send and receive money between
              GBP, USD, NGN and your local African currencies instantly. Bomba
              offers a fast and transparent service. Don't pay more, save time
              and gain more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
