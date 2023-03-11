let race_number = Math.floor(Math.random() * 1000);

let registered_early = false;

let runner_age = 35;
// let runner_age = 21;
//let runner_age = 35;


if (registered_early && runner_age > 18) {

    race_number += 1000;
}

else if (!registered_early && runner_age > 18) {
    race_number += 1000;
}


if (registered_early && runner_age > 18) {
    console.log(`Your starting at 9:30, your race number is ${race_number}`);
}

else if (!registered_early && runner_age > 18) {
    console.log(`adult race time is 11:00 am your race number is${race_number}`);

}

else if (runner_age < 18) {
    console.log(`adult race time is 12:30 am your race number is ${race_number}`);

}

else{
    console.log(`runner to see the registration desk`);

}