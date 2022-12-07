const datepackage = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const reuiredDate = datepackage(new Date(2020, 7, 22), days);
  return "${reuiredDate.getDate()}-${reuiredDate.getMonth() + 1}-${reuiredDate.getFullYear()}";
};
module.exports = getDateAfterXDays;
