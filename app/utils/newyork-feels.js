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
    "volume": -4,
  }).toMaster();

let motifOneA =  [null, "A4", null, "A4", "A4", "D5", "A4", "D5", "F5", null, null, null, null, null, null, null];
let motifOneB = [null, "A4", null, "A4", "A4", "D5", "A4", "D5", "F5", "C6", "A6", "A6", "C6", "F5", "D5", "A4"];
var congaPart = new Tone.Sequence(function(time, pitch) {
  conga.triggerAttack(pitch, time, Math.random()* 0.7 + 0.3);
}, [motifOneA, motifOneA, motifOneA, motifOneB], "1n");

  var plate = new Tone.MetalSynth({
    "harmonicity" : 10,
    "resonance" : 1200,
    "modulationIndex" : 15,
    "envelope" : {
      "decay" : 0.4,
    },
    "volume" : -30,
  }).toMaster();

  var platePart = new Tone.Sequence(function(time, pitch) {
    plate.frequency.setValueAtTime(pitch, time, Math.random()*0.5 + 0.5);
    plate.triggerAttack(time);
  }, [null, "A4", "A4", null, null, null, null, null], "16n");

  var bazz = new Tone.DuoSynth({
    vibratoAmount  : 0.1,
    vibratoRate  : 0.3,
    harmonicity  : 0.6,
    voice0  : {
      volume  : 12 ,
      portamento  : 1 ,
      oscillator  : {
        type  : 'sine2',
      }  ,
      filterEnvelope  : {
        attack  : 0.01 ,
        decay  : 0.5 ,
        sustain  : 0.5 ,
        release  : 1
      }  ,
      envelope  : {
        attack  : 0.02 ,
        decay  : 0.4 ,
        sustain  : 0.4 ,
        release  : 0.5
      }
    },
    voice1: {
      volume  : 20,
      portamento  : 2 ,
      oscillator  : {
        type  : 'triangle',
      }  ,
      filterEnvelope  : {
        attack  : 0.01 ,
        decay  : 0.3 ,
        sustain  : 0.4 ,
        release  : 0.4
      }  ,
      envelope  : {
        attack  : 0.01 ,
        decay  : 0.1 ,
        sustain  : 0.2 ,
        release  : 0.5
      }
    },
  }).toMaster();

  var bassPart = new Tone.Sequence(function(time, pitch) {
    bazz.triggerAttackRelease(pitch, time, 0.8);
  }, ["A1", null, null, null, "A1", null, null, null, "A1", null, null, null, "A1", null, null, null,], "16n");

  var player = new Tone.Player({
    "url" : "assets/audio/metrointro.mp3",
    "loop" : true,
    'loopStart': '8m',
    "fadeIn": '2s',
    "fadeOut": '0.5s',
    "volume": -17,
  }).toMaster();
  // player.autostart = true;
  // intro.setLoopPoints('10s', '12s');

  var player2 = new Tone.Player({
    'url': "assets/audio/metroloop.mp3",
    'loop': 'true',
    'loopStart': '0.15',
    'loopEnd': '0.65',
    'fadeIn': '0.3s',
    'volume': -12,
  }).toMaster();

  Tone.Transport.bpm.value = 120;
  Tone.Buffer.on('load', function(){
    sampleTrack(player);
  });

  // TEST SEQUENCE
  /* Tone.Transport.schedule(function() {
    bassPart.start();
  }, '0'); */

Tone.Transport.schedule(function() {
    player.start();
  }, '0');

  Tone.Transport.schedule(function() {
    player2.start();
    player.stop();
  }, '12m');

  Tone.Transport.schedule(function() {
    // congaPart.start('0s');
    congaPart.start('16m');
  });

  Tone.Transport.schedule(function() {
    platePart.start('20m');
  });

  Tone.Transport.schedule(function() {
    bassPart.start('20m');
  });
}

function sampleTrack(sample) {
  //sample.start();
  Tone.Transport.start();
}
