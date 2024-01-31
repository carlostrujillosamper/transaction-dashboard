export const formatDollarAmount = (amount: number | undefined) => {
  if (amount === 0) {
    return "$0.00";
  }
  if (!amount) {
    return "$--";
  }
  const toFixedAmount = Number(amount.toFixed(2));
  const numberWithCommas = toFixedAmount.toLocaleString("en-US");
  const numberWithCommasSplittedByCents = numberWithCommas.split(".");
  const hasCents = numberWithCommasSplittedByCents.length > 1;
  const numberCents = numberWithCommasSplittedByCents[1];
  const hasOneCent = hasCents && numberCents.length === 1;

  if (hasOneCent) {
    return `$${numberWithCommas}0`;
  }

  if (!hasCents) {
    return `$${numberWithCommas}.00`;
  }
  return `$${numberWithCommas}`;
};
