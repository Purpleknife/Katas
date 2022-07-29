//Write a code that will trigger a special message (Polluted) when the air is too polluted (= when the amount of dirty samples is greater than the threshold).

//threshold is the highest acceptable amount of dirty samples.

const checkAir = function(samples, threshold) {
  let dirtySamples = 0; //Number of dirty samples.
  let cleanSamples = 0; //Number of clean samples.
  let dirtyPercent = 0; //Percent of dirty samples in comparison with clean samples.
  
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySamples += 1;
    }
    if (samples[i] === 'clean') {
      cleanSamples += 1;
    }
    dirtyPercent = dirtySamples / (dirtySamples + cleanSamples);
  }
  if (dirtyPercent > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'clean', 'dirty', 'clean'],
  0.5
));

console.log(checkAir(
  ['clean', 'dirty', 'dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.5
));
