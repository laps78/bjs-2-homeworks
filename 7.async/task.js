
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callbackFunc, id) {
    if (!id) {
      throw new Error('Не передано id!');
    }
    let validateId = this.alarmCollection.some(item => item.id === id);
    if (validateId) {
      console.error('id already exists');
      return;
    }
    this.alarmCollection.push({ time, callbackFunc, id });
  }

  removeClock(id) {
    let searchResult = this.alarmCollection.findIndex(elem => elem.id === id);
    if (searchResult === -1) {
      return false;
    }
    this.alarmCollection.splice(searchResult, 1)[0];
    return true;
    
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit", hour12: false });
  }

  start() {
    let checkClock = (alarm) => {
      if (item.time === now) {
        item.callbackFunc();
      }
      if (!item.id) {
        item.id = setInterval(this.alarmCollection.forEach(item => {
          checkClock(item);
        }), 1000);
      }
    };
  }

  stop() {
    if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
  }

  printAlarms() {
    this.alarmCollection.forEach(item => {
      console.log(item.id, item.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let alarm = new AlarmClock();

  let callbackFunc = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      console.log('дилинь!!! дилинь!!');
    };
  }, 1000);

  alarm.addClock(alarm.getCurrentFormattedTime(), callbackFunc, 1);

}

testCase();

