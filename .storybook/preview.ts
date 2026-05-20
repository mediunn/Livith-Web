import "../src/app/index.css";
import { MemoryRouter } from "react-router-dom";
import type { Preview } from "@storybook/react-vite";
import React from "react";

(window as any).amplitude = { track: () => {} };

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const path = (context.parameters?.routerPath as string) ?? "/";

      return React.createElement(
        MemoryRouter,
        { initialEntries: [path] },
        React.createElement(Story, null)
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
