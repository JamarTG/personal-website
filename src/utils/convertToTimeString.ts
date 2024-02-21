const constructTimeString = (hours: number, minutes: number) => {
  const localesArgument = ["en-US", { minimumIntegerDigits: 2 }] as const;
  const hourString = hours % 12 == 0 ? 12 : (hours % 12).toLocaleString(...localesArgument);
  const minuteString = minutes.toLocaleString(...localesArgument);
  console.log(hours % 12)
  const meridiem =hours >= 12 ? "PM" : "AM";
  return `yep ${hourString}:${minuteString} ${meridiem}`;
};
export default constructTimeString;
