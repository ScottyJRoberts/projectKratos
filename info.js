
let info = {
athlete1:[148,49.96,	47.28,	34.48,	27.68,	62.15],
athlete2:[152.8,152.8,152.8,152.8,152.8,152.8],
athlete3:[154.33, 56.55, 48.02,36.53, 32.55,69.07],
athlete4:[157.17,	56.6,	49.35,	34.55,	35.2, 69.75],
athlete5:[158.42,57.53,50.83,35.15,34.57,69.72],
athlete6:[163.26,59.12,50.24,37.74,34.68,72.42],
athlete7:[139,43.7,43.1,29.7,24.3,54.3],
athlete8:[149,53.6,48.9,31.4,29.9,61.3],
athlete9:[150.5,54.6,44.1,34.8,29.7,65.9],
athlete10:[150,53.9,44.3,28.2,31.9,64.5],
athlete11:[152.5,55.9,48.4,32.4,32.1,67.6],
athlete12: [159,56.4,48.5,34.2,32.1,70.5]};

//console.log(info.athlete1);

var testAthlete = [152.7, 50, 47.3,34.5, 27.68, 62.15];


function bySortedValue(obj, callback, context) {
  var tuples = [];

  for (var key in obj) tuples.push([key, obj[key]]);

  tuples.sort(function(a, b) {
    return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
  });

  var length = tuples.length;
  while (length--) callback.call(context, tuples[length][0], tuples[length][1]);
}



function getRecommendations(professionalPool, userData, numRecs) {
  //goal is given a set of measurement bring up the athlete
  //go through the info and build a difference matrix:
  var diffScores = {};
  for (var e in professionalPool) {
    var name = e;

    console.log(name);
    //console.log(info[e]);
    diffScores[name] = [];
    var tmp = [];
    for (var meas in professionalPool[e]) {
      //console.log(meas);

      //now lets build the differences

      tmp[meas] = Math.abs(testAthlete[meas]-professionalPool[e][meas]);
      console.log(info[e][meas]);

    }
    var sum = 0;
    for (var i = 0; i < 6; i ++) {
      sum += tmp[i];
    }
    diffScores[name] = sum;
  }
  var closestPeeps = [];
  var sortedbyKeyJSONArray = [];

   bySortedValue(diffScores, function(key, value) {
    console.log(value);
    var k = key;
    sortedbyKeyJSONArray.push({[k]: value});
  });
  closestPeeps = sortedbyKeyJSONArray.slice(0, numRecs);
  return closestPeeps;
}
console.log(getRecommendations(info, testAthlete, 3));
//console.log(diffScores);
