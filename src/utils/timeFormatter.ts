import moment from "jalali-moment";

export const formatTime = (timeString: string) => {
  const momentObj = moment(timeString, "jYYYY/jM/jD HH:mm:ss").locale("fa");
  return momentObj.format("jD jMMMM jYYYY HH:mm");
};
