export function formatDate(date) {
  console.log({ date });
  try {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date,
    );
    return formattedDate;
  } catch (err) {
    return date;
  }
}
