interface Student {
    name: string,
    email: string,
    age: Date,
    score: number,
};
interface StatResult {
    highest: number,
    lowest: number,
    average: number,
};
interface StudentStatsResult {
    score: StatResult,
    age: StatResult,
};

class StudentStatsCalculator {
    private student: Student[];

    constructor(students: Student[]) {
        this.student = students;
    }

    private calculateAge(birthDate: Date) {
        const actualDate = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - actualDate.getFullYear();
        const hasHadBirthdayThisYear = today.getMonth() > actualDate.getMonth() ||
            (today.getMonth() === actualDate.getMonth() && today.getDate() >= actualDate.getDate());
        return hasHadBirthdayThisYear ? age : age - 1;
    }
    private calculateStats(values: number[]) {
        const highest = Math.max(...values);
        const lowest = Math.min(...values);

        const average = values.reduce((acc, val) => acc + val, 0) / values.length;

        return {
            highest, lowest, average: parseFloat(average.toFixed(2))
        }
    }

    public getStats() {
        const scores = this.student.map((student) => student.score);
        const ages = this.student.map((student) => this.calculateAge(student.age));

        return {
            score: this.calculateStats(scores),
            age: this.calculateStats(ages),
        }
    }

}

const listStudent: Student[] = [
    {
        name: 'Alice',
        email: 'alice@mail.com',
        age: new Date('2002-06-10'),
        score: 88,
    },
    {
        name: 'Bob',
        email: 'bob@mail.com',
        age: new Date('2001-07-08'),
        score: 92,
    },
    {
        name: 'Charlie',
        email: 'charlie@mail.com',
        age: new Date('2001-05-10'),
        score: 72,
    },
]

const calculator = new StudentStatsCalculator(listStudent);
console.log(calculator.getStats());
