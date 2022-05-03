export const formatErrors = (e) => {
  if (e.code === "ERR_NETWORK") {
    return ["Es ist ein Netzwerkfehler aufgetreten"];
  }
  return ["Es ist ein unbekannter Fehler aufgetreten"];
};

export const formatPrice = (currentPrice) => {
  const formatter = new Intl.NumberFormat("de-AT", {
    currency: "EUR",
    style: "currency",
  });
  return formatter.format(currentPrice);
};
