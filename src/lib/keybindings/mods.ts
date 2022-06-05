 export const MODS = [
    { key: "Super", substitution: "Super" },
    { key: "Shift", substitution: "Shift" },
    { key: "Control", substitution: "Ctrl" },
    { key: "Alt", substitution: "Alt" },
  ];

  export const isMod = (key) => !!MODS.find(mod => mod.key.toLowerCase() === key.toLowerCase());
  export const substituteIfMod = (key) => {
    if (!isMod(key)) return key;
    const { substitution } = MODS.find((mod) => mod.key.toLowerCase() === key.toLowerCase());
    return substitution;
  };
