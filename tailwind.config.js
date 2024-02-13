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
        },
        gray: {
          "100": "#0d062d",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        royalblue: "#2754ca",
        slategray: "#787486",
        whitesmoke: "#f5f5f5",
        crimson: "rgba(229, 48, 48, 0.08)",
        indianred: "#c4524b",
        blueviolet: "rgba(80, 48, 229, 0.08)",
        blue: "#5200ff",
        red: "#ff0000",
        text: "#4b4b4b",
        "secondary-brand": "#d9e6f7",
        "primary-brand": "#ed2590",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        lalezar: "Lalezar",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs-1": "9.1px",
        "3xs": "10px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      smi: "13px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "6xl": "25px",
      xs: "12px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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