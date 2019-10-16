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
    return this.getUserData(id).find(day => day.date === date).hoursSlept;
  };

  getSleepQuality(date, id) {
    return this.getUserData(id).find(day => day.date === date).sleepQuality;
  };

  getWeekHrsSlept(date, id) {
    let userSleepData = this.getUserData(id).filter(user => user.userID === id);
    
    let specificDay = userSleepData.findIndex(day => day.date === date);

    let week = userSleepData.slice(specificDay - 3, specificDay + 4);
    
    return week.map(day => day.hoursSlept)
  };

  getWeekSleepQual(date, id) {
    let userSleepData = this.getUserData(id).filter(user => user.userID === id);

    let specificDay = userSleepData.findIndex(day => day.date === date);

    let week = userSleepData.slice(specificDay - 3, specificDay + 4);
    
    return week.map(day => day.sleepQuality);
  }

};

if (typeof module !== "undefined") {
  module.exports = Sleep;
};