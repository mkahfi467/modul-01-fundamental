const listStudent: any = [
    {
        name: 'Budi',
        email: 'budi@gmail.com',
        age: '2001-01-01',
        score: 80,
    },
    {
        name: 'Adi',
        email: 'adi@gmail.com',
        age: '2002-03-03',
        score: 70,
    },
    {
        name: 'Cellos',
        email: 'cellos@gmail.com',
        age: '2002-02-02',
        score: 90,
    },
];

function calculate(_listStudent) {
    
    const score = {
        highestScore: 0,
        lowestScore: 0,
        averageScore: 0,
    }
    const age = {
        highest: 0,
        lowest: 0,
        average: 0,
    }

    const today = new Date();
    // Score
    _listStudent.forEach((e) => {
        // SCORE
        if (e.score > score.highestScore) {
            score.highestScore = e.score;
        }
        if (e.score < score.highestScore) {
            score.lowestScore = e.score;
        }
        score.averageScore += e.score;

        // AGE
        const birth = new Date(e.age);
        let ageStudent = today.getFullYear() - birth.getFullYear();
        const pengecekanBulan = today.getMonth() > birth.getMonth() ||
            (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

        if (!pengecekanBulan) {
            ageStudent--;
        }

        if (ageStudent > age.highest) {
            age.highest = ageStudent;
        }
        if (ageStudent < age.highest) {
            age.lowest = ageStudent;
        }
        age.average += ageStudent;
    });
    score.averageScore /= _listStudent.length;
    age.average /= _listStudent.length

    return {
        score,
        age
    }
}

console.log(calculate(listStudent));
