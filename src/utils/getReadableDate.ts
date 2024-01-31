export const getReadableDate = (date: string | null) => {
  if (!date) return "";
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const displayDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(date)
  );
  return displayDate;
};
