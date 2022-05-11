export const formatErrors = (e) => {
  console.log(e);

  if (e.response.data && typeof e.response.data === "string") {
    return [e.response.data];
  }

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
