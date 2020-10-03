
module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let steps = 2 ** disksNumber;
    let time = steps / (turnsSpeed / 3600);
    return {
      turns: steps,
      seconds: time
    }
}

