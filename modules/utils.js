 // utils.js
 module.exports.getDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
  return formattedDate;
};