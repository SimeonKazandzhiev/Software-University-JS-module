function speedRadar(speed, area){
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch(area){
        case 'motorway':
            if(speed > motorwayLimit){
                if(speed - motorwayLimit <= 20){
                    let diff = speed - motorwayLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - speeding`);
                }else if(speed - motorwayLimit <=40){
                    let diff = speed - motorwayLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - excessive speeding`);
                }else{
                    let diff = speed - motorwayLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - reckless driving`);
                }
            }else{
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`)
            }
            break;
        case 'interstate':
            if(speed > interstateLimit){
                if(speed - interstateLimit <= 20){
                    let diff = speed - interstateLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - speeding`);
                }else if(speed - interstateLimit <=40){
                    let diff = speed - interstateLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - excessive speeding`);
                }else{
                    let diff = speed - interstateLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - reckless driving`);
                }
            }else{
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`)
            }
            break;
        case 'city':
            if(speed > cityLimit){
                if(speed - cityLimit <= 20){
                    let diff = speed - cityLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - speeding`);
                }else if(speed - cityLimit <=40){
                    let diff = speed - cityLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - excessive speeding`);
                }else{
                    let diff = speed - cityLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - reckless driving`);
                }
            }else{
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
            }
            break;
        case 'residential':
            if(speed > residentialLimit){
                if(speed - residentialLimit <= 20){
                    let diff = speed - residentialLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - speeding`);
                }else if(speed - residentialLimit <=40){
                    let diff = speed - residentialLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - excessive speeding`);
                }else{
                    let diff = speed - residentialLimit;
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - reckless driving`);
                }
            }else{
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`)
            }
            break;
    }

}

speedRadar(21, 'residential');
