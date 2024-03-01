let countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

function countrymaal(data) {
  for (let x in data) {
    let option = document.createElement("option");
    option.setAttribute("value", x);
    option.innerText = x;

    let option2 = document.createElement("option");
    option2.setAttribute("value", x);
    option2.innerText = x;

    document.getElementById("to").append(option2);
    document.getElementById("from").append(option);
  }
}

countrymaal(countryList);

function from() {
  let leftchoot = document.getElementById("from");

  leftchoot.addEventListener("change", function () {
    fetchdata(leftchoot.value);
    for (let x in countryList) {
      if (leftchoot.value === x) {
        document.getElementById("leftflag").innerHTML = null;
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `https://flagsapi.com/${countryList[x]}/flat/64.png`
        );

        document.getElementById("leftflag").append(img);
      }
    }
  });
}

from();

function to() {
  let rightchoot = document.getElementById("to");

  rightchoot.addEventListener("change", function () {
    for (let x in countryList) {
      if (rightchoot.value === x) {
        document.getElementById("rightflag").innerHTML = null;
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `https://flagsapi.com/${countryList[x]}/flat/64.png`
        );

        document.getElementById("rightflag").append(img);
      }
    }
  });
}

to();

function fetchdata(text) {
  fetch(`https://api.exchangerate-api.com/v4/latest/${text}`)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      console.log(data.rates);

      let right = document.getElementById("to");

      right.addEventListener("change", function () {
        for (let x in data.rates) {
          
          if (right.value == x) {
            console.log(data.rates[x])
            let exchangebtn = document.getElementById("rate");

            exchangebtn.addEventListener("click", function () {
              let input = document.getElementById("enterammount").value;

              let show = document.getElementById("show");
              show.innerText = `Exchange rate amount = ${
                input * data.rates[x]
              }`;
            });
          }
        }
      });
    });
}
