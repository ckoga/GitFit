class ActivityRepo {
  constructor(activityData) {
    this.data = activityData;
  }


  getAvgStairsClimbed(date) {
  let day = this.data.filter(day => day.date === date);

  return (day.reduce((acc, user) => acc += user.flightsOfStairs , 0) / day.length).toFixed(1);
  };

  
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}