const readline = require('readline'); 

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
}); 

rl.question(`What's your name?`, (name) => {

rl.question(`What's an activity you like doing?`, (activity) => {

rl.question(`What do you listen to while doing that?`, (sound) => {

rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {

rl.question(`Which sport is your absolute favourite?`, (sport) => {

rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superPower) => {
  console.log(`${name} loves to ${activity} while listening to ${sound}. Their favourite meal of the day is ${meal}, usually followed by ${sport}. Secretly, their super power is ${superPower} :3`);

  rl.close();

            });

          });

        }); 

      }); 

    }); 

  }); 
