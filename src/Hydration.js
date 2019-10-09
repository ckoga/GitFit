class Hydration {
  constructor(data) {
    this.data = data;
  }

  getDailyAverageConsumption(id) {
    let userHydraData = this.data.filter(user => user.userID === id)

    return (userHydraData.reduce((acc, day) => {
      acc += day.numOunces
      return acc
    }, 0) / userHydraData.length).toFixed(1)
  };

  getDailyAverageConsumption(date, id) {
    let userHydraData = this.data.filter(user => user.userID === id)

    return userHydraData.find(day = day.date === date);
  }
};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}