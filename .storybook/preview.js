import "../public/build/bundle.css";
import "../public/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    list: [
      { name: "dark", class: "dark", color: "black" },
      { name: "light", color: "white" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
