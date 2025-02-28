export const styles = [
  {
    name: "cs16",
    label: "CS 1.6",
  },
  {
    name: "default",
    label: "Default",
  },
] as const;

export type Style = (typeof styles)[number];
