"use client";

import { useState, useRef, useEffect } from "react";

interface Country {
  name: string;
  code: string;
  iso: string;
}

const countries: Country[] = [
  { name: "Afghanistan", code: "+93", iso: "af" },
  { name: "Albania", code: "+355", iso: "al" },
  { name: "Algeria", code: "+213", iso: "dz" },
  { name: "American Samoa", code: "+1684", iso: "as" },
  { name: "Andorra", code: "+376", iso: "ad" },
  { name: "Angola", code: "+244", iso: "ao" },
  { name: "Argentina", code: "+54", iso: "ar" },
  { name: "Armenia", code: "+374", iso: "am" },
  { name: "Australia", code: "+61", iso: "au" },
  { name: "Austria", code: "+43", iso: "at" },
  { name: "Azerbaijan", code: "+994", iso: "az" },
  { name: "Bahrain", code: "+973", iso: "bh" },
  { name: "Bangladesh", code: "+880", iso: "bd" },
  { name: "Belarus", code: "+375", iso: "by" },
  { name: "Belgium", code: "+32", iso: "be" },
  { name: "Belize", code: "+501", iso: "bz" },
  { name: "Bhutan", code: "+975", iso: "bt" },
  { name: "Bolivia", code: "+591", iso: "bo" },
  { name: "Brazil", code: "+55", iso: "br" },
  { name: "Brunei", code: "+673", iso: "bn" },
  { name: "Bulgaria", code: "+359", iso: "bg" },
  { name: "Cambodia", code: "+855", iso: "kh" },
  { name: "Cameroon", code: "+237", iso: "cm" },
  { name: "Canada", code: "+1", iso: "ca" },
  { name: "Chile", code: "+56", iso: "cl" },
  { name: "China", code: "+86", iso: "cn" },
  { name: "Colombia", code: "+57", iso: "co" },
  { name: "Costa Rica", code: "+506", iso: "cr" },
  { name: "Croatia", code: "+385", iso: "hr" },
  { name: "Cuba", code: "+53", iso: "cu" },
  { name: "Cyprus", code: "+357", iso: "cy" },
  { name: "Czech Republic", code: "+420", iso: "cz" },
  { name: "Denmark", code: "+45", iso: "dk" },
  { name: "Ecuador", code: "+593", iso: "ec" },
  { name: "Egypt", code: "+20", iso: "eg" },
  { name: "Estonia", code: "+372", iso: "ee" },
  { name: "Ethiopia", code: "+251", iso: "et" },
  { name: "Finland", code: "+358", iso: "fi" },
  { name: "France", code: "+33", iso: "fr" },
  { name: "Georgia", code: "+995", iso: "ge" },
  { name: "Germany", code: "+49", iso: "de" },
  { name: "Ghana", code: "+233", iso: "gh" },
  { name: "Greece", code: "+30", iso: "gr" },
  { name: "Guatemala", code: "+502", iso: "gt" },
  { name: "Hong Kong", code: "+852", iso: "hk" },
  { name: "Hungary", code: "+36", iso: "hu" },
  { name: "Iceland", code: "+354", iso: "is" },
  { name: "India", code: "+91", iso: "in" },
  { name: "Indonesia", code: "+62", iso: "id" },
  { name: "Iran", code: "+98", iso: "ir" },
  { name: "Iraq", code: "+964", iso: "iq" },
  { name: "Ireland", code: "+353", iso: "ie" },
  { name: "Israel", code: "+972", iso: "il" },
  { name: "Italy", code: "+39", iso: "it" },
  { name: "Jamaica", code: "+1876", iso: "jm" },
  { name: "Japan", code: "+81", iso: "jp" },
  { name: "Jordan", code: "+962", iso: "jo" },
  { name: "Kazakhstan", code: "+7", iso: "kz" },
  { name: "Kenya", code: "+254", iso: "ke" },
  { name: "Kuwait", code: "+965", iso: "kw" },
  { name: "Latvia", code: "+371", iso: "lv" },
  { name: "Lebanon", code: "+961", iso: "lb" },
  { name: "Libya", code: "+218", iso: "ly" },
  { name: "Lithuania", code: "+370", iso: "lt" },
  { name: "Luxembourg", code: "+352", iso: "lu" },
  { name: "Malaysia", code: "+60", iso: "my" },
  { name: "Maldives", code: "+960", iso: "mv" },
  { name: "Malta", code: "+356", iso: "mt" },
  { name: "Mexico", code: "+52", iso: "mx" },
  { name: "Mongolia", code: "+976", iso: "mn" },
  { name: "Morocco", code: "+212", iso: "ma" },
  { name: "Myanmar", code: "+95", iso: "mm" },
  { name: "Nepal", code: "+977", iso: "np" },
  { name: "Netherlands", code: "+31", iso: "nl" },
  { name: "New Zealand", code: "+64", iso: "nz" },
  { name: "Nigeria", code: "+234", iso: "ng" },
  { name: "Norway", code: "+47", iso: "no" },
  { name: "Oman", code: "+968", iso: "om" },
  { name: "Pakistan", code: "+92", iso: "pk" },
  { name: "Palestine", code: "+970", iso: "ps" },
  { name: "Panama", code: "+507", iso: "pa" },
  { name: "Peru", code: "+51", iso: "pe" },
  { name: "Philippines", code: "+63", iso: "ph" },
  { name: "Poland", code: "+48", iso: "pl" },
  { name: "Portugal", code: "+351", iso: "pt" },
  { name: "Qatar", code: "+974", iso: "qa" },
  { name: "Romania", code: "+40", iso: "ro" },
  { name: "Russia", code: "+7", iso: "ru" },
  { name: "Saudi Arabia", code: "+966", iso: "sa" },
  { name: "Serbia", code: "+381", iso: "rs" },
  { name: "Singapore", code: "+65", iso: "sg" },
  { name: "Slovakia", code: "+421", iso: "sk" },
  { name: "Slovenia", code: "+386", iso: "si" },
  { name: "South Africa", code: "+27", iso: "za" },
  { name: "South Korea", code: "+82", iso: "kr" },
  { name: "Spain", code: "+34", iso: "es" },
  { name: "Sri Lanka", code: "+94", iso: "lk" },
  { name: "Sudan", code: "+249", iso: "sd" },
  { name: "Sweden", code: "+46", iso: "se" },
  { name: "Switzerland", code: "+41", iso: "ch" },
  { name: "Syria", code: "+963", iso: "sy" },
  { name: "Taiwan", code: "+886", iso: "tw" },
  { name: "Tanzania", code: "+255", iso: "tz" },
  { name: "Thailand", code: "+66", iso: "th" },
  { name: "Tunisia", code: "+216", iso: "tn" },
  { name: "Turkey", code: "+90", iso: "tr" },
  { name: "UAE", code: "+971", iso: "ae" },
  { name: "Uganda", code: "+256", iso: "ug" },
  { name: "Ukraine", code: "+380", iso: "ua" },
  { name: "United Kingdom", code: "+44", iso: "gb" },
  { name: "United States", code: "+1", iso: "us" },
  { name: "Uruguay", code: "+598", iso: "uy" },
  { name: "Uzbekistan", code: "+998", iso: "uz" },
  { name: "Venezuela", code: "+58", iso: "ve" },
  { name: "Vietnam", code: "+84", iso: "vn" },
  { name: "Yemen", code: "+967", iso: "ye" },
  { name: "Zambia", code: "+260", iso: "zm" },
  { name: "Zimbabwe", code: "+263", iso: "zw" },
];

function FlagImg({ iso, size = 20 }: { iso: string; size?: number }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${iso}.png`}
      alt={iso}
      width={size}
      height={Math.round(size * 0.75)}
      style={{ objectFit: "cover", borderRadius: 2 }}
    />
  );
}

interface CountryCodeDropdownProps {
  value: string;
  onChange: (code: string) => void;
}

export default function CountryCodeDropdown({ value, onChange }: CountryCodeDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countries.find((c) => c.code === value) || countries.find((c) => c.code === "+91")!;

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          color: "#171200",
          whiteSpace: "nowrap",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span style={{ fontSize: 10, color: "#666" }}>▾</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: 280,
            maxHeight: 300,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 6,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            zIndex: 100,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "8px 10px", borderBottom: "1px solid #eee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #ddd", borderRadius: 4, padding: "6px 10px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 13,
                  width: "100%",
                  color: "#171200",
                  background: "transparent",
                }}
              />
            </div>
          </div>
          <div className="country-dropdown-list" style={{ maxHeight: 240, overflowY: "auto" }}>
            {filtered.map((country) => (
              <div
                key={country.name + country.code}
                onClick={() => {
                  onChange(country.code);
                  setOpen(false);
                  setSearch("");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#171200",
                  background: country.code === value ? "#f5f5f5" : "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = country.code === value ? "#f5f5f5" : "transparent")}
              >
                <FlagImg iso={country.iso} size={20} />
                <span>{country.name} {country.code}</span>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: "12px 14px", color: "#999", fontSize: 13 }}>No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
