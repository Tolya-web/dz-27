function Anketa(name, lastname, patronymic, age, experience, year, D2, ch){
    this.name = name;
    this.lastname = lastname;
    this.patronymic = patronymic;
    this.age = age;
    this.experience = experience;
    this.year = year;
    this.D2 = D2;
    if(ch) {
        this.ch = "Да";
    }
    else{
        this.ch = "Нет";
    }
}