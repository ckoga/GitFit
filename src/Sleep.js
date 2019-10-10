class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUserData(id) {
    return this.sleepData.filter(data => data.userID === id);
  };

  getAverageHoursSlept(id) {
    return (this.getUserData(id).reduce((acc, day) => {
      return acc += day.hoursSlept;
    }, 0) / this.getUserData(id).length).toFixed(1)
  };

  getAverageSleepQuality(id) {
    return (this.getUserData(id).reduce((acc, day) => {
     return acc += day.sleepQuality
    }, 0) / this.getUserData(id).length).toFixed(1)
  };

  getHoursSlept(date, id) {
  }

};

if (typeof module !== "undefined") {
  module.exports = Sleep;
};