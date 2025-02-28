import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: [
      {
        path: "ui/cs16/accordion.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
      },
    },
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: [
      "https://shadcn-cs16.triginarsa.com/registry/button.json",
    ],
    files: [
      {
        path: "ui/cs16/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    files: [
      {
        path: "ui/cs16/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/cs16/button.tsx"],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/cs16/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "ui/cs16/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/cs16/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    files: [
      {
        path: "ui/cs16/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "ui/cs16/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: [
      {
        path: "ui/cs16/progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: [
      {
        path: "ui/cs16/radio-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: [
      {
        path: "ui/cs16/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "ui/cs16/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-separator"],
    files: [
      {
        path: "ui/cs16/separator.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider"],
    files: [
      {
        path: "ui/cs16/slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        path: "ui/cs16/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "ui/cs16/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
];
