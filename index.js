const datepackage = require("date-fns/addDays");
const modifiedDate = (days) => {
  const reuiredDate = datepackage(new Date(2020, 7, 22), days);
  return "${modifiedDate.getDate()}-${modifiedDate.getMonth()+1}-${modifiedDate.getFullYear()}";
};
module.imports = modifiedDate;
