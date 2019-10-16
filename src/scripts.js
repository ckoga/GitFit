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

function appendWeek(data, element, unit) {
  return data.forEach(num => $(element).append(`<li>${num}${unit}</li>`))
}
appendWeek(usersHydration.getWeekConsumption('2019/06/20', user.id), '.week__water', 'oz');
appendWeek(userSleep.getWeekHrsSlept('2019/06/20', user.id),'.week__sleep', 'hrs');
appendWeek(userSleep.getWeekSleepQual('2019/06/20', user.id), '.week__slpQual', 'qal');
appendWeek(userActivity.getWeekStep('2019/06/20', user.id), '.week__step', 'stps');
appendWeek(userActivity.getWeekStairs('2019/06/20', user.id), '.week__stairs', 'strs');
appendWeek(userActivity.getWeekMinActv('2019/06/20', user.id), '.week__minActiv', 'min');




function appendChartHydration() {}