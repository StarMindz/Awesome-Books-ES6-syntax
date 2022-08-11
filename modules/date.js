// Add Clock

const runClock = () => {
  const dateElement = document.getElementById('date');
  const localdate = () => {
    const date = new Date();
    const dateString = date.toLocaleString();
    dateElement.textContent = dateString;
  };
  setInterval(localdate, 1000);
  // End of Clock
};

export default runClock;
