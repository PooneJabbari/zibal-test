export const formatCardNumber = (cardNumber: string) => {
  const regex = /.{1,4}/g;
  return cardNumber.match(regex)?.join("-");
};
