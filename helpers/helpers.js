const urlToSearch = (params) => {
  const array = params.split("-");
  const capitalized = array.map(
    (string) => string.charAt(0).toUpperCase() + string.slice(1)
  );
  return capitalized.join(" ");
};

module.exports = { urlToSearch };
