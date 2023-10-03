//3. Write a “person” class to hold all the details.
//code:
class Person {
    constructor(firstName, lastName, age, email, place, year, batch, education) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.place = place;
        this.year = year;
        this.batch = batch;
        this.education = education;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
    getPlace() {
        return this.place;
    }
    setPlace(place) {
        this.place = place;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getBatch() {
        return this.batch;
    }
    setBatch(batch) {
        this.batch = batch;
    }
    getEducation() {
        return this.education;
    }
    setEducation(education) {
        this.education = education;
    }
}
const person = new Person("Sowbharniya", "Sathasivam", 24, "sowbhargeo2000@gmail.com", "Nurani, Palakkad, Kerala", 2023, "B52 WD Tamil", "B.Sc(Geography)");
console.log("Full Name:", person.getFullName());
console.log("Age:", person.getAge());
console.log("Email:", person.getEmail());
console.log("Place:", person.getPlace());
console.log("Year:", person.getYear());
console.log("Batch:", person.getBatch());
console.log("Education:", person.getEducation());

//Output:
//Full Name: Sowbharniya Sathasivam
//Age: 24
//Email: sowbhargeo2000@gmail.com
//Place: Nurani, Palakkad, Kerala
//Year: 2023
//Batch: B52 WD Tamil
//Education: B.Sc(Geography)