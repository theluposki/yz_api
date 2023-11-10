export const dateExp = (expire) => {
  const now = Math.floor(Date.now() / 1000);
  const remainingTime = parseInt(expire) - now;

  const remainingMinutes = Math.floor(remainingTime / 60);
  const remainingHours = Math.floor(remainingMinutes / 60);
  const remainingMinutesAfterLastHour = remainingMinutes % 60;

  if (remainingHours > 0) {
    return `The token expires in ${remainingHours} hours and ${remainingMinutesAfterLastHour} minutes`;
  } else if (remainingMinutesAfterLastHour > 0) {
    return `The token expires in ${remainingMinutesAfterLastHour} minutes`;
  } else {
    return "The token has expired";
  }
};
