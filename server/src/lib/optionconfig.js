// here declare and also exporting cors options
export const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

// here declare and also exporting cookie option
export const cookieOptions = {
  httpOnly: true,
  secure: true,
};

// define & exporting handle selectCountryCode function
export const selectCountryCode = () => {
  const countryLists = [
    { name: "Afghanistan", dial_code: "+93", iso: "AF" },
    { name: "Albania", dial_code: "+355", iso: "AL" },
    { name: "Algeria", dial_code: "+213", iso: "DZ" },
    { name: "Andorra", dial_code: "+376", iso: "AD" },
    { name: "Angola", dial_code: "+244", iso: "AO" },
    { name: "Argentina", dial_code: "+54", iso: "AR" },
    { name: "Armenia", dial_code: "+374", iso: "AM" },
    { name: "Australia", dial_code: "+61", iso: "AU" },
    { name: "Austria", dial_code: "+43", iso: "AT" },
    { name: "Azerbaijan", dial_code: "+994", iso: "AZ" },

    { name: "Bahamas", dial_code: "+1-242", iso: "BS" },
    { name: "Bahrain", dial_code: "+973", iso: "BH" },
    { name: "Bangladesh", dial_code: "+880", iso: "BD" },
    { name: "Belarus", dial_code: "+375", iso: "BY" },
    { name: "Belgium", dial_code: "+32", iso: "BE" },
    { name: "Belize", dial_code: "+501", iso: "BZ" },
    { name: "Benin", dial_code: "+229", iso: "BJ" },
    { name: "Bhutan", dial_code: "+975", iso: "BT" },
    { name: "Bolivia", dial_code: "+591", iso: "BO" },
    { name: "Bosnia and Herzegovina", dial_code: "+387", iso: "BA" },

    { name: "Brazil", dial_code: "+55", iso: "BR" },
    { name: "Bulgaria", dial_code: "+359", iso: "BG" },
    { name: "Cambodia", dial_code: "+855", iso: "KH" },
    { name: "Cameroon", dial_code: "+237", iso: "CM" },
    { name: "Canada", dial_code: "+1", iso: "CA" },
    { name: "Chile", dial_code: "+56", iso: "CL" },
    { name: "China", dial_code: "+86", iso: "CN" },
    { name: "Colombia", dial_code: "+57", iso: "CO" },
    { name: "Costa Rica", dial_code: "+506", iso: "CR" },
    { name: "Croatia", dial_code: "+385", iso: "HR" },

    { name: "Cuba", dial_code: "+53", iso: "CU" },
    { name: "Czech Republic", dial_code: "+420", iso: "CZ" },
    { name: "Denmark", dial_code: "+45", iso: "DK" },
    { name: "Egypt", dial_code: "+20", iso: "EG" },
    { name: "Finland", dial_code: "+358", iso: "FI" },
    { name: "France", dial_code: "+33", iso: "FR" },
    { name: "Germany", dial_code: "+49", iso: "DE" },
    { name: "Greece", dial_code: "+30", iso: "GR" },
    { name: "Hong Kong", dial_code: "+852", iso: "HK" },
    { name: "Hungary", dial_code: "+36", iso: "HU" },

    { name: "India", dial_code: "+91", iso: "IN" },
    { name: "Indonesia", dial_code: "+62", iso: "ID" },
    { name: "Iran", dial_code: "+98", iso: "IR" },
    { name: "Iraq", dial_code: "+964", iso: "IQ" },
    { name: "Ireland", dial_code: "+353", iso: "IE" },
    { name: "Israel", dial_code: "+972", iso: "IL" },
    { name: "Italy", dial_code: "+39", iso: "IT" },
    { name: "Japan", dial_code: "+81", iso: "JP" },
    { name: "Kenya", dial_code: "+254", iso: "KE" },
    { name: "Kuwait", dial_code: "+965", iso: "KW" },

    { name: "Malaysia", dial_code: "+60", iso: "MY" },
    { name: "Maldives", dial_code: "+960", iso: "MV" },
    { name: "Mexico", dial_code: "+52", iso: "MX" },
    { name: "Nepal", dial_code: "+977", iso: "NP" },
    { name: "Netherlands", dial_code: "+31", iso: "NL" },
    { name: "New Zealand", dial_code: "+64", iso: "NZ" },
    { name: "Nigeria", dial_code: "+234", iso: "NG" },
    { name: "Norway", dial_code: "+47", iso: "NO" },
    { name: "Oman", dial_code: "+968", iso: "OM" },
    { name: "Pakistan", dial_code: "+92", iso: "PK" },

    { name: "Philippines", dial_code: "+63", iso: "PH" },
    { name: "Poland", dial_code: "+48", iso: "PL" },
    { name: "Portugal", dial_code: "+351", iso: "PT" },
    { name: "Qatar", dial_code: "+974", iso: "QA" },
    { name: "Romania", dial_code: "+40", iso: "RO" },
    { name: "Russia", dial_code: "+7", iso: "RU" },
    { name: "Saudi Arabia", dial_code: "+966", iso: "SA" },
    { name: "Singapore", dial_code: "+65", iso: "SG" },
    { name: "South Africa", dial_code: "+27", iso: "ZA" },
    { name: "South Korea", dial_code: "+82", iso: "KR" },

    { name: "Spain", dial_code: "+34", iso: "ES" },
    { name: "Sri Lanka", dial_code: "+94", iso: "LK" },
    { name: "Sweden", dial_code: "+46", iso: "SE" },
    { name: "Switzerland", dial_code: "+41", iso: "CH" },
    { name: "Thailand", dial_code: "+66", iso: "TH" },
    { name: "Turkey", dial_code: "+90", iso: "TR" },
    { name: "United Arab Emirates", dial_code: "+971", iso: "AE" },
    { name: "United Kingdom", dial_code: "+44", iso: "UK" },
    { name: "United States", dial_code: "+1", iso: "US" },
    { name: "Vietnam", dial_code: "+84", iso: "VN" },
  ];

  return { countryLists };
};
