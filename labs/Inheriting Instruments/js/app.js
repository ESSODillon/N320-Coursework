class Instrument {
  constructor(family, verb, loudness) {
    this.family = family;
    this.verb = verb;
    this.loudness = loudness;
  }

  play() {
    console.log(this.family, this.verb, this.loudness);
  }
}

class Woodwind extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb);
    this.loudness = loudness;
  }
}

class Percussion extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb);
    this.loudness = loudness;
  }
}

class Stringed extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb);
    this.loudness = loudness;
  }
}

let trumpet = new Woodwind("Trumpet", "toots", "ferociously");
let bongos = new Percussion("Bongos", "slaps", "uproariously");
let banjo = new Stringed("Banjo", "strums", "softly");

band = [trumpet.play(), bongos.play(), banjo.play()];

for (let i = 0; i < band.length; i++) {
  band[i];
}
