/* global Tone */

export default function newyorkFeels() {
  //create a synth and connect it to the master output (your speakers)

  /*var bell = new Tone.NoiseSynth({
    "harmonicity" : 12,
    "resonance" : 800,
    "modulationIndex" : 20,
    "envelope" : {
      "decay" : 0.4,
    },
    "volume" : -20
  }).toMaster(); */
  /*var bellPart = new Tone.Sequence(function(time, freq){
    // bell.frequency.setValueAtTime(freq, time, Math.random()*0.5 + 0.5);
    bell.triggerAttack(time);
  }, [300, null, 200, null, 200, 200, null, 200, null, 200, null, 200], "4t").start(0);
  // bellPart.loop = true;
  // bellPart.loopEnd = "1m"; */
  /* var conga = new Tone.MembraneSynth({
    "pitchDecay" : 0.1,
    "octaves" : 2,
    "envelope" : {
      "attack" : 0.0006,
      "decay" : 0.5,
      "sustain" : 0
    },
    "volume": -5,
  }).toMaster();
  var congaPart = new Tone.Sequence(function(time, pitch){
    conga.triggerAttack(pitch, time, Math.random()* 0.7 + 0.3);
  }, ["G2", "C3", "A2", "D2"], "4n").start(0); */

  var player = new Tone.Player({
    "url" : "assets/audio/metroloop.mp3",
    "loop" : false,
    "loopStart": '1s',
    "loopEnd": '10s',
  }).toMaster();
  player.autostart = true;
  // intro.setLoopPoints('10s', '12s');

  /* var player = new Tone.Player("assets/audio/metroloop.mp3").toMaster();
  //play as soon as the buffer is loaded
  player.loop = true;
  player.setLoopPoints(0.6, 0.9);
  var congaPart = new Tone.Sequence(function(time, pitch){
    player.start();
  //  player.triggerAttack(pitch, time, Math.random()* 0.7 + 0.3);
}, ["G2", "C3", "A2", "D2"], "1n").start('5m'); */
  /* congaPart.loop = true;
  congaPart.loopEnd = "1m"; */
  Tone.Transport.bpm.value = 120;
  Tone.Transport.start();
}
