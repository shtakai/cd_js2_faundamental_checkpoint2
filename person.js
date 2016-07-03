var person;
person = {
  name: '',
  distance_traveled: 0,
  say_name: function(){console.log(this.name);},
  say_something: function(message){
    console.log(`${this.name} says ${message}`);
  },
  walk: function(){
    console.log(`${this.name} is walking`);
    this.distance_traveled += 3;
  },
  run: function(){
    console.log(`${this.name} is running`);
    this.distance_traveled += 10;
  },
  crawl: function(){
    console.log(`${this.name} is crawling`);
    this.distance_traveled += 1;
  },
};

person.name = 'sashimi';
person.say_name();
person.say_something("test");
person.run();
person.run();
person.crawl();
person.walk();
console.log(person.distance_traveled);
