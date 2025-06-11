function calculateAge(birthdate: string): number {
    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
}

// Contoh penggunaan
const umur = calculateAge('2002-06-10');
console.log(`Umur: ${umur} tahun`);
console.log(typeof(umur));
