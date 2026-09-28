export const useDashboardHook = () => {
  const time = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = time.getDate();
  const dayNumber = time.getDay();
  const monthNumber = time.getMonth();
  const month = months[monthNumber];
  const day = weekDays[dayNumber];

  


  return {
    date,
    month,
    day
  }
};
