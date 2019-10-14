const users = new UserRepo(userData);
let currentUser = users.getUser(getRandomNumber());
let user = new User(currentUser);
const usersHydration = new Hydration(hydrationData, user);
const usersSleep = new Sleep(sleepData, user); 
// const userActivity = new Activity(activityData, user);
// const usersActivityRepo = new ActivityRepository(activityData);

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$('.header__span').html(`${user.getName()}!`);
$('#step-goal').html(user.dailyStepGoal);
$('#avg-step-goal').html(users.calculateAverageStepGoal());
$('#oz-consumed').html(`${usersHydration.getDailyConsumption('2019/06/20', 1)}oz`);
// $('#step-count').html()
