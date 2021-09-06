class Instrument {
  constructor(family, play, loudness) {
    this.family = family;
    this.play = play;
    this.loudness = loudness;
  }

  details() {
    console.log(this.family, this.play, "at", this.loudness);
  }
}

let test = new Instrument("Guitar", "Strum", 200);
test.details();
