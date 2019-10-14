class ActivityRepo {
  constructor(activityData) {
    this.data = activityData;
  }

  getDay(date) {
   return this.data.filter(day => day.date === date);
  }

  getAvgStairsClimbed(date) {
    return (this.getDay(date).reduce((acc, user) => acc += user.flightsOfStairs , 0) / this.getDay(date).length).toFixed(1);
  };

  getAvgStepsTaken(date) {
    return (this.getDay(date).reduce((acc, user) => acc += user.numSteps, 0) / this.getDay(date).length).toFixed(1);
  };

  getAvgMinActive(date) {
    return (this.getDay(date).reduce((acc, user) => acc += user.minutesActive, 0) / this.getDay(date).length).toFixed(1)
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}