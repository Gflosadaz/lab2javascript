function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

// Example usage:
let score = 85;
console.log(`The grade for a score of ${score} is ${getGrade(score)}.`);
