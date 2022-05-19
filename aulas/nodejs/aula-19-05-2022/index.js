const moment = require('moment');
const timers = require('timers');

const novaData = moment();
const nossoTimer = () => {
  timers.setTimeout(
    () => { console.log('Executei'); },
    5000,
  )
};

console.log('nossoTimer', nossoTimer());
