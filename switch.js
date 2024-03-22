// Traffic light
let color = "red";

switch (color) {
  case "red":
    console.log("stop");
    break; //if there is no break then stop,slow down also gets printed.
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("traffic light is broken");
}

// Practice Qs.
let today = 6;

switch (today) {
  case 1:
    console.log("Today is Sunday");
    break;
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;
  case 5:
    console.log("Today is Thursday");
    break;
  case 6:
    console.log("Today is Friday");
    break;
  case 7:
    console.log("Today is Saturday");
    break;
  default:
    console.log("wrong number for week days")
}

