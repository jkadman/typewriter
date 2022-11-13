// need each letter to animate 50ms after the previous
// problem right now, js is processing the whole loop at once
// how do I get it to process only one piece of the for loop at a


const sentence = "hello there from lighthouse labs";

// new problem: figuring out to get '\n' to work as it is going before the async function
// need to have '\n' be the last thing that happens


const looper = function (string, time) {
  let j = 0;  
  for (let char of string) {
    setTimeout(() => {
      process.stdout.write(char)
    }, j += time) 
  }
  setTimeout(() => {
    process.stdout.write('\n')
  }, j += time + 1)
};

looper(sentence, 50)
