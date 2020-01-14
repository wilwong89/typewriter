let sentence = 'Hello there from Lighthouse Labs.';
sentence += '\n';
let delay = 1000;
for(const char of sentence) {
  delay += 50;
  setTimeout(function() {
    process.stdout.write(char);
  }, delay);
};