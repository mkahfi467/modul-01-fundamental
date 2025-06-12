interface WorkingHours {
    name: string,
    dailyHour: number,
    dailySalary: number,
}

class Employee {
    name: string;
    // public workingHours: WorkingHours[] = [];
    working: WorkingHours[] = [];

    constructor(_name: string) {
        this.name = _name;
    }

    // working(): WorkingHours[] {
    //     return this.workingHours;
    // }

    getTotalSalary(): number {
        let result: number = 0;
        for (const val of this.working) {
            result += val.dailySalary;
        }
        return result;
    }

    hitungJamKerja(_clockIn: string, _clockOut: string): number {
        const converIn = _clockIn.split(":");
        const converOut = _clockOut.split(":");
        const result: number = parseInt(converOut[0]) - parseInt(converIn[0]);
        return result;
    }
}

class FullTime extends Employee {
    constructor(_name) {
        super(_name);
    }

    // addWorkingHours(_jamKerja: number, _clockIn: string, _clockOut: string) {
    addWorkingHours(_clockIn: string, _clockOut: string) {
        const hitungGaji = (_jamKerja: number): number => {
            const gaji: number = _jamKerja > 6 ? (_jamKerja % 6) * 75000 + 600000 : _jamKerja * 100000;
            return gaji;
        }

        this.working.push({
            name: this.name,
            // dailyHour: _jamKerja,
            dailyHour: this.hitungJamKerja(_clockIn, _clockOut),
            // dailySalary: hitungGaji(_jamKerja),
            dailySalary: hitungGaji(this.hitungJamKerja(_clockIn, _clockOut)),
        })
    }
}

class PartTime extends Employee {
    constructor(_name) {
        super(_name);
    }

    // addWorkingHours(_jamKerja: number) {
    addWorkingHours(_clockIn: string, _clockOut: string) {
        const hitungGaji = (_jamKerja: number): number => {
            const gaji: number = _jamKerja > 6 ? (_jamKerja % 6) * 30000 + 300000 : _jamKerja * 50000;
            return gaji;
        }

        this.working.push({
            name: this.name,
            dailyHour: this.hitungJamKerja(_clockIn, _clockOut),
            dailySalary: hitungGaji(this.hitungJamKerja(_clockIn, _clockOut)),
        })
    }
}

const EmployeeA = new FullTime("Budi");
EmployeeA.addWorkingHours("08:00", "14:00");
EmployeeA.addWorkingHours("08:00", "16:00");
console.log(EmployeeA.working);
console.log(EmployeeA.getTotalSalary());

const EmployeeB = new PartTime("Agus");
EmployeeB.addWorkingHours("08:00", "14:00");
EmployeeB.addWorkingHours("09:00", "17:00");
console.log(EmployeeB.working);
console.log(EmployeeB.getTotalSalary());

// ++++++++
const clockIn = "08:00";
const clockOut = "15:00";
const converIn = clockIn.split(":");
const converOut = clockOut.split(":");
console.log(converIn);
console.log(converOut);
console.log(parseInt(converIn[0]));
console.log(parseInt(converOut[0]));
const diff: number = parseInt(converOut[0]) - parseInt(converIn[0]);
console.log(diff);
