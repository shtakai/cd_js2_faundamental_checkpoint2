var simple = {
  simpleSum : function(x, y){
    var sum;
    sum = 0;
    for(var i = x; i <= y ; i++ ){
      sum += i
    }
    console.log('sum:', sum);
  },

  minimum :function (arr){
    var min;
    min = arr[0]
    for(var idx = 1; idx < arr.length; idx++ ){
      if(arr[idx] < min){
        min = arr[idx];
      }
    }
    return min;
  },

  simpleAverage :function (arr){
    if(!Array.isArray(arr) || arr.length == 0){ return undefined; }
    var sum;
    sum = 0;
    for(var idx in arr){
      sum += arr[idx];
    }
    return sum / arr.length;
  }
};

simple.simpleSum(10,13);
console.log(simple.minimum([2,1,0,-1,10]));
console.log(simple.simpleAverage([2,1,0,-1,10]));
