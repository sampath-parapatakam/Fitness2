function Item(itemCode, itemName, catalogCategory, description, rating, imageUrl) {
  this.itemCode = itemCode;
  this.itemName = itemName;
  this.catalogCategory = catalogCategory;
  this.description = description;
  this.rating = rating;
  this.imageUrl = imageUrl;
}

var UpperBody= new Item('1','UpperBody','Strength','Pushups - 20 reps \n Bent over Row - 3 sets(20reps increasing weight) \n Arnold Press - 3 sets(20reps increasing weight) \n Dumbbell Bench Press- 3sets(increasing weights 30reps) \n Chinups -3sets(20 each) \n Tricep Pushdown - 3sets(increasing weights 20reps)', 3, '../assets/images/upperbody.jpeg');
var Arms= new Item('2','Arms','Strength','Hammer Curl - 3sets 20 reps(increasing weight), rod dips - 3sets, chin ups- 3 sets, EZ bar Curl- 3sets(increasing weight), Overhead press-3sets, Tricep Extension(3sets), Poundstone Curl(3sets)', 5, '../assets/images/arms.jfif');
var Legs= new Item('3','Legs','Strength','Squats- 3sets(40 each), deadlift- 3sets(increasing weight), lunges- 4sets, leg press- 10mins, pistol squat- 3sets', 2, '../assets/images/legs.jpg');
var Running= new Item('4','Running or Cycling','Endurance','Speed Skaters-20mins, Squats-3sets, Walking lunges-15mins, jogging- 1mile(increase distance daily), Explosive hill sprints, Interval speed training(increase and decrease speed at intervals), long cycling', 3, '../assets/images/cycle.jpg');
var Sports= new Item('5','Sports','Endurance','BasketBall shooting for arms, Soccer for legs, Tennis for arms and abs, Swimming for whole body and Stamina increase, Boxing for reflexes and fat burning', 4, '../assets/images/sport.jpg');
var MuscleEndurance= new Item('6','Muscle-Endurance','Endurance','Plank- 5mins(increase time), Pushups- 3sets(increase count daily), pullups- 3sets(increase daily), Abs workout-3sets, Bench Dip- 3sets, Diamond dips', 5, '../assets/images/muscle.jpg');
var Sprinting= new Item('7','Sprinting','Cardio','warmup(walk and jog 1mile), A Skip, B Skip, Fast Legs, High Knees, Backward running, Hill Sprint, ', 3, '../assets/images/sprint.jpg');
var Kettlebells= new Item('8','Kettlebells','Cardio','Goblet Squat(10reps 3sets), One arm row(3sets), One arm press(3 sets), leg Pass, Squat and press, Butterfly cross, Hammer(3sets)', 4, '../assets/images/kettle.jfif');
var FatBurn= new Item('9','Fat Burn','Cardio','Treadmill, Elliptical, Cycling, Stair Climber, Jumping rope, Rowing, High intensity Interval training, Jumping Squants, Criss Cross Sit ups', 2, '../assets/images/fat.jfif');

all_Items=[UpperBody,Arms,Legs,Running,Sports,MuscleEndurance,Sprinting,Kettlebells,FatBurn];

function getItems(){
  return all_Items;
}


function getItem(ItemCode) {
  var result;

  for(var i=0;i<all_Items.length;i++){
    if(all_Items[i].itemCode === ItemCode){
      result = all_Items[i];
    }
  }
  return result;
}

function getCategoryItems(CategoryCode) {
  var result = [];

  for(var i=0;i<all_Items.length;i++){
    if(all_Items[i].catalogCategory === CategoryCode){
      result.push(all_Items[i]);
    }
  }
  return result;
}

module.exports={
  getItem:getItem,
  getItems:getItems,
  getCategoryItems: getCategoryItems
}
