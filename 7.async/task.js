
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(time, callbackFunc, id) {
    if (!id) {
      throw new Error('error text');
    }
    let validateId = this.alarmCollection.find(item => {
      if (item.id === id) {
        console.error();
        return;
      }
    });
    this.alarmCollection.push({ time, callbackFunk, id });
  }

  removeClock(id) {
    let searchResult = this.alarmCollection.findIndex(elem => elem.id === id);
    if (searchResult === -1) return null;
    if (this.alarmCollection.splice(searchResult, 1)[0];) {
      return true;
    } else {
      return false;
    }
  }
}