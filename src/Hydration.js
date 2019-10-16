class Hydration {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.filter(data => data.userID === id);
  };

  getDailyAverageConsumption(id) {
    return (this.getUserData(id).reduce((acc, day) => {
      return acc += day.numOunces
    }, 0) / this.getUserData(id).length).toFixed(1)
  };

  getDailyConsumption(date, id) {
    return this.getUserData(id).find(day => day.date === date).numOunces;
  };

  getWeekConsumption(date, id) {
    let userHydraData = this.data.filter(user => user.userID === id);

    let specificDay = userHydraData.findIndex(day => day.date === date);

    let subset = userHydraData.slice(specificDay - 3, specificDay + 4);

    return subset.map(data => data.numOunces)
  };
};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}