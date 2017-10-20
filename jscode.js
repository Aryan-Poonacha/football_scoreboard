var mins = 0;
var secs = 0;
var timecheck;

var scalex = 0.1;
var scaley = 0.1;
var scalecheck;

var homescore = 0;
var awayscore = 0;
var t = 0;
var timecheck2;

var homechance = 47;
var awaychance  = 53;
var scorechanceIncrement = 1;
var scoreincrementtime;


function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function timeIncrement()
{
  secs+=1;
  if((secs<10)&&(mins<10))
  {
    document.getElementById('time').innerHTML = "0"+mins+":"+"0"+secs;
  }
  if((secs>=10)&&(mins<10))
  {
    document.getElementById('time').innerHTML = "0"+mins+":"+secs;
  }
  if((secs<10)&&(mins>=10))
  {
    document.getElementById('time').innerHTML = mins+":"+"0"+secs;
  }
  if((secs>=10)&&(mins>=10))
  {
    document.getElementById('time').innerHTML = +mins+":"+secs;
  }
  if(secs==59)
  {
    mins+=1;
    secs = 0;
  }
  if(mins==90)
  {
    mins = 0;
    secs = 0;
  }
}

///////////////////////////////////////CONSTANT CHECKS//////////////////////////////////

timecheck = setInterval(timeIncrement,1000);
scoreincrementtime = setInterval(GOALchance,10000);

/////////////////////////////////////////////FUNCS/////////////////////////////////////
function leftscore()
{
  homescore+=1;
  if(homescore == 10)
  {
    homescore = 0;
  }
  document.getElementById('homescore').innerHTML = "<b>"+homescore +"</b>";
}

function rightscore()
{
  awayscore+=1;
  if(awayscore==10)
  {
    awayscore = 0;
  }
  document.getElementById('awayscore').innerHTML = "<b>"+awayscore + "</b>";
}

function GOAL()
{
  document.getElementById('goalimg').style.display = "inline";
  document.getElementById('goalimg').style.transform = 'scale('+scalex+','+scaley+')';
  scalex+=0.01;
  scaley+=0.01;
}

function GOAL2()
{
    scalecheck = setInterval(GOAL,16);
    timecheck2 = setInterval(counttime,1000);
}

function counttime()
{
  t+=1;

  if(t==3)
  {
    clearInterval(scalecheck);
    clearInterval(timecheck2);
    scalex = 0.01;
    scaley = 0.01;
    document.getElementById('goalimg').style.display = "none";
    document.getElementById('goalimg').style.transform = 'scale('+scalex+','+scaley+')';
    t= 0;
  }
}

function GOALchance()
{
  var x = randomInt(1,100);
  var hmdeterminer = randomInt(1,2);
  if(hmdeterminer == 1)
  {
    if((x>0)&&(x<=homechance))
    {
    leftscore();
    GOAL2();
    homechance -= scorechanceIncrement;
    awaychance += scorechanceIncrement;
    if(scorechanceIncrement<=5)
    {
        scorechanceIncrement +=1;
    }
    }
  }
  if(hmdeterminer == 2)
  {
    if((x>(100-awaychance))&&(x<=100))
    {
    rightscore();
    GOAL2();
    homechance += scorechanceIncrement;
    awaychance -= scorechanceIncrement;
    if(scorechanceIncrement<=5)
    {
        scorechanceIncrement +=1;
    }

    }
  }
}
