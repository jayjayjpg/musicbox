/* global Tone */

export default function newyorkFeels() {
  //create a synth and connect it to the master output (your speakers)

  var conga = new Tone.PluckSynth({
    // "pitchDecay" : 0.1,
    'dampening': 2000,
    'resonance': 0.8,
    /* "envelope" : {
      "attack" : 0.0006,
      "decay" : 0.5,
      "sustain" : 0
    }, */
    "volume": 5,
  }).toMaster();

let motifOneA =  [null, "A4", null, "A4", "A4", "D5", "A4", "D5", "F5", null, null, null, null, null, null, null];
let motifOneB = [null, "A4", null, "A4", "A4", "D5", "A4", "D5", "F5", "C6", "A6", "A6", "C6", "F5", "D5", "A4"];
  var congaPart = new Tone.Sequence(function(time, pitch){
    conga.triggerAttack(pitch, time, Math.random()* 0.7 + 0.3);
  }, [motifOneA, motifOneA, motifOneA, motifOneB], "1n");

  var player = new Tone.Player({
    "url" : "assets/audio/metrointro.mp3",
    "loop" : true,
    'loopStart': '8m',
    "fadeIn": '2s',
    "fadeOut": '0.5s',
    "volume": -7,
  }).toMaster();
  // player.autostart = true;
  // intro.setLoopPoints('10s', '12s');

  var player2 = new Tone.Player({
    'url': "assets/audio/metroloop.mp3",
    'loop': 'true',
    'loopStart': '0.15',
    'loopEnd': '0.65',
    'fadeIn': '0.3s',
    'volume': -7,
  }).toMaster();

  Tone.Transport.bpm.value = 120;
  Tone.Buffer.on('load', function(){
    sampleTrack(player);
  });

  Tone.Transport.schedule(function() {
    player.start();
  }, '0');

  Tone.Transport.schedule(function() {
    player2.start();
    player.stop();
  }, '12m');

  Tone.Transport.schedule(function(time) {
    // congaPart.start('0s');
    congaPart.start('16m');
  });

  /* Tone.Transport.schedule(function(time) {
    congaPart2.start('8s');
    // congaPart.start('25s');
  }); */
}

function sampleTrack(sample) {
  //sample.start();
  Tone.Transport.start();
}
