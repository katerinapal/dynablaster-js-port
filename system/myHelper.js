var myHelper = {

    clearNegativeZero : function(x) {
        if (x == 0 && !Math.sign(x)) x = 0;
        return x;
    },

    getRandomBin : function() {
        if (Math.random() > .5) return 1;
        return -1;
    },

    getRandomInt : function (min, max) {
        if (typeof min === 'undefined') min = 0;
        if (typeof max === 'undefined') max = 100;
        var wynik = Math.floor(Math.random() * (max - min + 1)) + min;
        return wynik;
    },

    shuffleArray : function (o)
    {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },

    pickRandomProperty : function (obj)
    {
        var result;
        var count = 0;
        for (var prop in obj)
          if (Math.random() < 1/++count)
             result = prop;
        return result;
    },

    distanceBetweenPoints : function (p1, p2)
    {
        var dist, dx, dy;
        dx = p1.x - p2.x;
        dy = p1.y - p2.y;
        dist = Math.sqrt(dx*dx + dy*dy);
        return dist;
    },

    deg2rad : function(degrees)
    {
        return degrees * Math.PI / 180;
    },

    rad2deg : function(radians)
    {
        return radians * 180 / Math.PI;
    }

}

var exported_myHelper_clearNegativeZero = function(x) {
    if (x == 0 && !Math.sign(x)) x = 0;
    return x;
};

var exported_myHelper_getRandomBin = function() {
    if (Math.random() > .5) return 1;
    return -1;
};

var exported_myHelper_getRandomInt = function (min, max) {
    if (typeof min === 'undefined') min = 0;
    if (typeof max === 'undefined') max = 100;
    var wynik = Math.floor(Math.random() * (max - min + 1)) + min;
    return wynik;
};

var exported_myHelper_shuffleArray = function (o)
{
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var exported_myHelper_pickRandomProperty = function (obj)
{
    var result;
    var count = 0;
    for (var prop in obj)
      if (Math.random() < 1/++count)
         result = prop;
    return result;
};

var exported_myHelper_distanceBetweenPoints = function (p1, p2)
{
    var dist, dx, dy;
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
    dist = Math.sqrt(dx*dx + dy*dy);
    return dist;
};

var exported_myHelper_deg2rad = function(degrees)
{
    return degrees * Math.PI / 180;
};

var exported_myHelper_rad2deg = function(radians)
{
    return radians * 180 / Math.PI;
};

export { exported_myHelper_getRandomInt as getRandomInt, exported_myHelper_shuffleArray as shuffleArray, exported_myHelper_pickRandomProperty as pickRandomProperty };
