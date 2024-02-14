/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkblue: {
          "100": "#371dae",
          "200": "rgba(56, 29, 173, 0.83)",
          "300": "rgba(39, 15, 146, 0.98)",
          "400": "rgba(56, 29, 173, 0.82)",
        },
        mediumslateblue: "#5e42d4",
        midnightblue: "#2e1c81",
        darkslateblue: "#18315b",
        aliceblue: "#f0f6ff",
        steelblue: "#324a6f",
        "text-color": "#252b42",
        orangered: {
          "100": "#f4511e",
          "200": "rgba(244, 81, 30, 0.01)",
          "300": "#ff661a",
          "500": "#ff4d00",
          "600": "rgba(255, 102, 26, 0.09)",
        },
        gray: {
          "100": "#0d062d",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "#8f8f8f",
        },
        royalblue: "#2754ca",
        blue: {
          "100": "#5200ff",
          "200": "#1400ff",
          "300": "#000afa",
        },
        red: "#ff0000",
        text: "#4b4b4b",
        "secondary-brand": "#d9e6f7",
        "primary-brand": "#ed2590",
        blueviolet: {
          "100": "#5030e5",
          "200": "rgba(80, 48, 229, 0.08)",
        },
        gainsboro: "#ddd",
        darkslategray: {
          "100": "#373737",
          "200": "#333",
        },
        darkgreen: "#0f6e00",
        forestgreen: {
          "100": "#369426",
          "200": "rgba(54, 148, 38, 0.09)",
        },
        mediumblue: {
          "100": "#4733ff",
          "200": "rgba(71, 51, 255, 0.09)",
        },
        slategray: "#787486",
        whitesmoke: "#f5f5f5",
        crimson: "rgba(229, 48, 48, 0.08)",
        indianred: "#c4524b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        lalezar: "Lalezar",
        roboto: "Roboto",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "3xs-1": "9.1px",
        "3xs": "10px",
        mini: "15px",
        xl: "20px",
        sm: "14px",
      },
    },
    fontSize: {
      smi: "13px",
      mini: "15px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "6xl": "25px",
      xs: "12px",
      lg: "18px",
      "7xl": "26px",
      "2xl": "21px",
      "3xl-5": "22.5px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};