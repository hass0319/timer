const time = process.argv.slice(2);

const alarmClock = (time) => {
  if (time.length === 0) return 'insert numbers';
  let sortedTime = time.sort((a,b) => a - b)
  sortedTime.forEach((timer, i, arr)=> {
    if (timer < 0) return 'timer negative';
    if(timer === NaN) return 'insert number';
    if (timer > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('BLOW');
        if (i === arr.lenght-1) {
          process.stdout.write('\n')
      };
      }, timer * 1000)
    }
  })
}