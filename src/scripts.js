const users = new UserRepo(userData);
let currentUser = users.getUser(getRandomNumber());
let user = new User(currentUser);
const usersHydration = new Hydration(hydrationData, user);
const userSleep = new Sleep(sleepData, user); 
const userActivity = new Activity(activityData, user);
const usersActivityRepo = new ActivityRepo(activityData);

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(user)
$('.header__span').html(`${user.getName()}!`);
$('#step-goal').html(user.dailyStepGoal);
$('#avg-step-goal').html(users.calculateAverageStepGoal());
$('#oz-consumed').html(`${usersHydration.getDailyConsumption('2019/06/20', user.id)}oz`);
$('#step-count').html(userActivity.getUserStepsToday('2019/06/20', user.id));
$('#avg-step-count').html(usersActivityRepo.getAvgStepsTaken('2019/06/20'))
$('#min-active').html(userActivity.getMinActive('2019/06/20', user.id))
$('#avg-min-active').html(usersActivityRepo.getAvgMinActive('2019/06/20'));
$('#stairs-climbed').html(userActivity.getUser('2019/06/20', user.id).flightsOfStairs);
$('#avg-stairs-climbed').html(usersActivityRepo.getAvgStairsClimbed('2019/06/20'));
$('#miles-walked').html(userActivity.calculateMilesWalked('2019/06/20', user.id))

$('#hours-slept').html(userSleep.getHoursSlept('2019/06/20', user.id));
$('#sleep-qual').html(userSleep.getSleepQuality('2019/06/20', user.id));

function appendHydrationWeek() {
  let week = usersHydration.getWeekConsumption('2019/06/20', user.id);

  let weekOz = week.map(day => day.numOunces)

  return weekOz.forEach(day => $('#seven-days').append(`<li>${day}oz</li>`))
}
appendHydrationWeek()