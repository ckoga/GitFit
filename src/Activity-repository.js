class ActivityRepo {
  constructor(activityData) {
    this.data = activityData;
  }

  getDay(date) {
   return this.data.filter(day => day.date === date);
  }

  getAvgStairsClimbed(date) {
  let day = this.getDay(date);

  return (day.reduce((acc, user) => acc += user.flightsOfStairs , 0) / day.length).toFixed(1);
  };

  getAvgStepsTaken(date) {}
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}