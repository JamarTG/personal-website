interface Time {
  hours: number;
  minutes: number;
}

const createTimeString = ({ hours, minutes }: Time) => {
  return `${hours.toString()} : ${minutes.toString()}`;
};

export default createTimeString;
