import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  const [showDetails, setShowDetails] = useState({
    functional: false,
    statistics: false,
    marketing: false,
  });

  const [preferences, setPreferences] = useState({
    functional: true,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookiePreferences");
    if (!saved) setVisible(true);
  }, []);

  const savePreferences = (prefs) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setVisible(false);
  };

  const handleAccept = () =>
    savePreferences({ functional: true, statistics: true, marketing: true });

  const handleDeny = () =>
    savePreferences({ functional: true, statistics: false, marketing: false });

  const handleSave = () => savePreferences(preferences);

  if (!visible) return null;

  return (
    <>
      <style>
        {`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .toggle {
          width: 36px;
          height: 20px;
          background: #e5e7eb;
          border-radius: 9999px;
          position: relative;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .toggle.active {
          background: #fbbf24;
        }

        .toggle::after {
          content: "";
          width: 14px;
          height: 14px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.2s ease;
        }

        .toggle.active::after {
          transform: translateX(16px);
        }

        .dropdown {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
        `}
      </style>

      <div
        className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6"
        style={{ animation: "slideUp 0.4s ease-out" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold">Manage Cookie Consent</h3>
          <button onClick={() => setVisible(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Intro */}
        <p className="text-xs text-gray-600 mb-4">
          Faston uses cookies to improve your experience, analyze traffic, and
          personalize content. Manage your preferences below.
        </p>

        {/* Functional */}
        <div className="border-t py-3 text-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setShowDetails((p) => ({ ...p, functional: !p.functional }))
            }
          >
            <span className="font-medium">Functional</span>
            <div className="flex items-center gap-2 text-green-600 text-xs">
              Always active
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showDetails.functional ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <div
            className="dropdown"
            style={{
              maxHeight: showDetails.functional ? "80px" : "0",
              opacity: showDetails.functional ? 1 : 0,
            }}
          >
            <p className="text-xs text-gray-600 mt-2">
              These cookies are required for the website to function and cannot
              be disabled.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="border-t py-3 text-sm">
          <div className="flex justify-between items-center">
            <span
              className="font-medium cursor-pointer"
              onClick={() =>
                setShowDetails((p) => ({ ...p, statistics: !p.statistics }))
              }
            >
              Statistics
            </span>

            <div className="flex items-center gap-3">
              <div
                className={`toggle ${
                  preferences.statistics ? "active" : ""
                }`}
                onClick={() =>
                  setPreferences((p) => ({
                    ...p,
                    statistics: !p.statistics,
                  }))
                }
              />
              <ChevronDown
                size={16}
                className={`cursor-pointer transition-transform ${
                  showDetails.statistics ? "rotate-180" : ""
                }`}
                onClick={() =>
                  setShowDetails((p) => ({ ...p, statistics: !p.statistics }))
                }
              />
            </div>
          </div>

          <div
            className="dropdown"
            style={{
              maxHeight: showDetails.statistics ? "80px" : "0",
              opacity: showDetails.statistics ? 1 : 0,
            }}
          >
            <p className="text-xs text-gray-600 mt-2">
              Helps us understand how visitors use our website.
            </p>
          </div>
        </div>

        {/* Marketing */}
        <div className="border-t py-3 text-sm">
          <div className="flex justify-between items-center">
            <span
              className="font-medium cursor-pointer"
              onClick={() =>
                setShowDetails((p) => ({ ...p, marketing: !p.marketing }))
              }
            >
              Marketing
            </span>

            <div className="flex items-center gap-3">
              <div
                className={`toggle ${
                  preferences.marketing ? "active" : ""
                }`}
                onClick={() =>
                  setPreferences((p) => ({
                    ...p,
                    marketing: !p.marketing,
                  }))
                }
              />
              <ChevronDown
                size={16}
                className={`cursor-pointer transition-transform ${
                  showDetails.marketing ? "rotate-180" : ""
                }`}
                onClick={() =>
                  setShowDetails((p) => ({ ...p, marketing: !p.marketing }))
                }
              />
            </div>
          </div>

          <div
            className="dropdown"
            style={{
              maxHeight: showDetails.marketing ? "80px" : "0",
              opacity: showDetails.marketing ? 1 : 0,
            }}
          >
            <p className="text-xs text-gray-600 mt-2">
              Used for personalized ads and marketing insights.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-6 text-sm">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#1F74B5] hover:bg-yellow-600 text-white font-medium py-2 rounded-full whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="flex-1 border py-2 rounded-full hover:bg-gray-100 whitespace-nowrap"
          >
            Deny
          </button>
          <button
            onClick={handleSave}
            className="flex-1 border py-2 rounded-full hover:bg-gray-100 whitespace-nowrap"
          >
            Save preferences
          </button>
        </div>

        {/* Footer */}
        <div className="text-xs text-center mt-4">
          <a href="/cookie-policy" className="text-orange-600 underline mr-2">
            Cookie Policy
          </a>
          |
          <a href="/privacy-policy" className="text-orange-600 underline ml-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
