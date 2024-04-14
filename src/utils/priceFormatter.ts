export const formatPrice = (price: number, currency: string) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits: 0,
  });
  const formattedPrice = formatter.format(price);
  return `${formattedPrice} ${currency}`;
};
