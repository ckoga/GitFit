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

  
};

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}