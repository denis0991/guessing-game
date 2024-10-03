class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
}

setRange(min, max) {
    this.min = min;
    this.max = max;
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
}

guess() {
    return this.currentGuess;
}

lower() {
    this.max = this.currentGuess;
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
}

greater() {
    this.min = this.currentGuess;
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
}
}

module.exports = GuessingGame;
