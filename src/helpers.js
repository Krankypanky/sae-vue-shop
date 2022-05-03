export const formatErrors = (e) => {
  if (e.code === "ERR_NETWORK") {
    return ["Es ist ein Netzwerkfehler aufgetreten"];
  }
  return ["Es ist ein unbekannter Fehler aufgetreten"];
};
