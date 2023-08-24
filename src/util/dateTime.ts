export const changeDateToDisplay = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formatDate = `${year}-${month}-${day}`;
  return formatDate;
};

export const getNowDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formatDate = `${year}-${month}-${day}`;
  return formatDate;
};
