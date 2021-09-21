// Parent class of Instrument. Provides the blueprints and methods for other subclasses to be built on top of it.
class Instrument {
  constructor(family, verb, loudness) {
    this.family = family;
    this.verb = verb;
    this.loudness = loudness;
  }
  // Play method that console logs all the current instruments attributes.
  play() {
    console.log(this.family, this.verb, this.loudness);
  }
}

// Child class for wooodwind instruments, extends its parent class of Instrument. Uses super to inherit it's parent attributes.
class Woodwind extends Instrument {
  constructor(loudness) {
    super("Trumpet", "toots", loudness);
    this.loudness = loudness;
  }
}

// Child class for percussion instruments, extends its parent class of Instrument. Uses super to inherit it's parent attributes.
class Percussion extends Instrument {
  constructor(loudness) {
    super("Bongos", "slaps", loudness);
    this.loudness = loudness;
  }
}

// Child class for stringed instruments, extends its parent class of Instrument. Uses super to inherit it's parent attributes.
class Stringed extends Instrument {
  constructor(loudness) {
    super("Banjo", "strums", loudness);
    this.loudness = loudness;
  }
}

// Instance of each class, only takes one argument which is "loudness"
let trumpet = new Woodwind("ferociously");
let bongos = new Percussion("uproariously");
let banjo = new Stringed("softly");

// Create an array that calls the play method on each of the instruments
band = [trumpet.play(), bongos.play(), banjo.play()];

// Cycle through the array
for (let i = 0; i < band.length; i++) {
  band[i];
}
