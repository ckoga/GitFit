class SleepRepo {
  constructor(data) {
    this.data = data;
  }

  getAverageSleepQual() {
    return (this.data.reduce((acc, elem) => {
      acc += elem.sleepQuality;
      return acc;
    }, 0) / this.data.length).toFixed(1);
  };

  getGreatSleepers(date) {
    let day = this.data.findIndex(day => day.date === date);

    let week = this.data.slice(day - 40, day + 30);

    let usersSleepQual = week.reduce((acc, curr) => {
      if (!acc[curr.userID]) {
        acc[curr.userID] = [curr.sleepQuality]
      } else {
        acc[curr.userID].push(curr.sleepQuality)
      }
      return acc;
    }, {})
    return usersSleepQual
    // Object.values(usersSleepQual).forEach(user => {
    //   if (user.forEach(num => num > 3)) {

    //   }
    // })
  }

};

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}