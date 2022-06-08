
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(time, callbackFunc, id) {
    if (!id) {
      throw new Error('Не передано id!');
    }
    let validateId = this.alarmCollection.find(item => {
      if (item.id === id) {
        console.error();
        return;
      }
    });
    this.alarmCollection.push({ time, callbackFunc, id });
  }

  removeClock(id) {
    let searchResult = this.alarmCollection.findIndex(elem => elem.id === id);
    if (searchResult === -1) return null;
    if (this.alarmCollection.splice(searchResult, 1)[0]) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit", hour12: false });
    return now;
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
    this.alarmCollection.forEach(item => {
      if (item.id) {
        clearInterval(item.id);
        item.id = null;
      }
    });
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

  //???????????????
  let callbackFunc = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      console.log('дилинь!!! дилинь!!');
    };
  }, 1000);

  alarm.addClock(alarm.getCurrentFormattedTime(), callbackFunc, id);

}

testCase();

