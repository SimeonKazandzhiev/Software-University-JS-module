function walk(steps, lengthFoot, speed) {

    let distanceInMeters = steps * lengthFoot;
    let speedInSeconds = speed / 3.6;

    let rest = Math.floor(distanceInMeters / 500);
    let time = distanceInMeters / speedInSeconds + rest * 60;


    let timeInHours = Math.floor(time / 3600);
    let timeInMins = Math.floor(time / 60);
    let timeInSecs = Math.ceil(time % 60);

    let finalHours = `${timeInHours < 10 ? 0 : ""}${timeInHours}`;
    let finalMinutes = `${timeInMins < 10 ? 0 : ""}${timeInMins}`;
    let finalSeconds = `${timeInSecs < 10 ? 0 : ""}${timeInSecs}`;

    console.log(`${finalHours}:${finalMinutes}:${finalSeconds}`);
}
walk(2564, 0.70, 5.5);