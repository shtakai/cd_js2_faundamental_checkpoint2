var personConstructor = function(name){
  var person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){console.log(person.name);},
    say_something: function(message){
      console.log(`${name} says '${message}'`);
    },
    walk: function(){
      console.log(`${name} is walking`);
      person.distance_traveled += 3;
    },
    run: function(){
      console.log(`${person.name} is running`);
      person.distance_traveled += 10;
    },
    crawl: function(){
      console.log(`${name} is crawling`);
      person.distance_traveled += 1;
    }
  };
  return person;
}

var ninjaConstructor = function(name){
  var ninja = {
    name: name,
    cohort: 'Ninjax',
    beltLevel: 0,
    levelUp: function(){
      ninja.beltLevel += 1;
    },
    getBelt: function(){
      switch (ninja.beltLevel) {
        case 0:
          return 'Yellow Belt';
          break;
        case 1:
          return 'Red Belt';
          break;
        case 2:
          return 'White Belt';
          break;
        default:
          return 'Black Belt';
      }
    }
  };
  return ninja;
}

person = personConstructor('sashimi');
person.say_name();
person.say_something("test");
person.run();
person.run();
person.crawl();
person.walk();
console.log(person.distance_traveled);

var ninja1 = ninjaConstructor('udon');
console.log(ninja1.name);
console.log(ninja1.cohort);
console.log(ninja1.beltLevel);
console.log(ninja1.getBelt());
ninja1.levelUp();

console.log(ninja1.beltLevel);
console.log(ninja1.getBelt());

