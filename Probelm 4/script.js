function calculateGrade() {
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const averageResult = document.getElementById('average-result');
    const gradeResult = document.getElementById('grade-result');

    // Check if any subject score is empty or invalid
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        averageResult.textContent = "Please fill in all the scores.";
        gradeResult.classList.add('hidden');
        averageResult.classList.remove('hidden');
        return;
    }

    // Calculate average score
    const totalScore = subject1 + subject2 + subject3 + subject4;
    const averageScore = totalScore / 4;

    // Determine grade based on average score
    let grade;
    if (averageScore >= 90) {
        grade = 'A';
    } else if (averageScore >= 80) {
        grade = 'B';
    } else if (averageScore >= 70) {
        grade = 'C';
    } else if (averageScore >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display results
    averageResult.textContent = `Your average score is: ${averageScore.toFixed(2)}`;
    gradeResult.textContent = `Your grade is: ${grade}`;
    averageResult.classList.remove('hidden');
    gradeResult.classList.remove('hidden');
}
