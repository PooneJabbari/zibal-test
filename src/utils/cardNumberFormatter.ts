export const formatCardNumber = (cardNumber: string) => {
  if (cardNumber.length < 4) {
    return cardNumber;
  }

  var segments = [];
  for (var i = 0; i < cardNumber.length; i += 4) {
    segments.push(cardNumber.slice(i, i + 4));
  }

  return segments.join("-");
};
