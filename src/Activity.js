class Activity {
  constructor(activityData, userData) {
    this.data = activityData;
    this.userData = userData;
  }

  getDay(date) {
    return this.data.filter(day => day.date === date);
  };

  getUser(date, id) {
    return this.getDay(date).find(user => user.userID === id);
  };

  calculateMilesWalked(date, id) {
    let user = this.userData.find(user => user.id === id);

    return parseFloat((user.strideLength * this.getUser(date, id).numSteps) / 5280).toFixed(1);
  };

  getMinActive(date, id) {
    let targetData = this.getUser(date, id)

    return targetData.minutesActive
  };

  calculateAvgMinActive(date, id) {
    let userActiveData = this.data.filter(user => user.userID === id);

    let specificDay = userActiveData.findIndex(day => day.date === date);

    let weekData = userActiveData.slice(specificDay - 3, specificDay + 4);

    return (weekData.reduce((acc, day) => acc += day.minutesActive, 0) / weekData.length).toFixed(1);
  };

  checkStepGoal(date, id) {
    let userActivity = this.getDay(date).find(user => user.userID === id);

    let userInfo = this.userData.find(user => user.id === id);

    return userActivity.numSteps > userInfo.dailyStepGoal ? true : false;
  };

  getStepGoalDays(id) {
    let userInfo = this.userData.find(user => user.id === id);

    let userData = this.data.filter(user => user.userID === id);

    return userData.filter(day => day.numSteps > userInfo.dailyStepGoal);
  };

  getStairRecord(id) {
    return this.data.filter(user => user.userID === id).reduce((acc, day) => {
      if (acc > day.flightsOfStairs) {
        acc 
      } else {
        acc = day.flightsOfStairs
      }
      return acc
    }, {})
  };


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}