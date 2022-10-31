export const calculateTimeLeft = () => {
  let year = new Date().getFullYear() + 1;
  let month = new Date().getMonth();
  let day = new Date().getDate();

  const difference = +new Date(`2023-01-14 11:00`.replace(/-/g, "/")) - +new Date();

  let timeLeft;

  console.log(new Date("2023-01-14 11:00"))

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
