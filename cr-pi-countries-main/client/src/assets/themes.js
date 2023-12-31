const themes = {
  light: {
    primary: "#ECF0F1",

    text: "#4A5962",

    largeShadow:
      "8px 8px 16px 0px rgba(189, 195, 199, 0.75), 16px 16px 24px 0px rgba(189, 195, 199, 0.25), -8px -8px 16px 0px rgba(255, 255, 255, 0.75), -16px -16px 24px 0px rgba(255, 255, 255, 0.25);",

    shortShadow:
      "4px 4px 8px 0px rgba(189, 195, 199, 0.75), 8px 8px 12px 0px rgba(189, 195, 199, 0.25), -4px -4px 8px 0px rgba(255, 255, 255, 0.75), -8px -8px 12px 0px rgba(255, 255, 255, 0.25);",
    pressedShadow:
      "-4px -4px 8px 0px rgba(255, 255, 255, 0.75) inset, 4px 4px 8px 0px #BDC3C7 inset;",

    textDisabled: "#C5C5C5",

    footerShadow:
      "-8px -8px 16px 0px rgba(255, 255, 255, 0.75), -16px -16px 24px 0px rgba(255, 255, 255, 0.25);",
  },
  dark: {
    primary: "#24272C",

    text: "#9A9A9A",

    largeShadow:
      "8px 8px 16px 0px rgba(0, 0, 0, 0.25), 16px 16px 24px 0px rgba(0, 0, 0, 0.15), -8px -8px 16px 0px rgba(255, 255, 255, 0.02), -16px -16px 32px 0px rgba(255, 255, 255, 0.05)",

    shortShadow:
      "4px 4px 8px 0px rgba(0, 0, 0, 0.30), 8px 8px 16px 0px rgba(0, 0, 0, 0.25), -4px -4px 8px 0px rgba(255, 255, 255, 0.05), -8px -8px 16px 0px rgba(255, 255, 255, 0.03)",
    pressedShadow:
      "-4px -4px 8px 0px rgba(255, 255, 255, 0.05) inset, 4px 4px 8px 0px rgba(0, 0, 0, 0.50) inset;",

    textDisabled: "#111111",

    footerShadow:
      "-8px -8px 16px 0px rgba(255, 255, 255, 0.02), -16px -16px 32px 0px rgba(255, 255, 255, 0.05);",
  },
};

export default themes;
