const redColor = "#ff7d7d";
const ignoreColor = "#39ffbd";

export const getColor = (ignore, reDelivery) => {
  if (ignore) {
    return ignoreColor;
  } else if (reDelivery) {
    return redColor;
  }
  return "transparent";
};
