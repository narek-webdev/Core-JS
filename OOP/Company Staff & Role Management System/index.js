class Employee {
  #name;
  #baseSalary;

  constructor(name, baseSalary) {
    this.#name = name;
    this.#baseSalary = baseSalary;
  }

  getName() {
    return this.#name;
  }

  getBaseSalary() {
    return this.#baseSalary;
  }

  calculatePay() {
    return this.#baseSalary;
  }

  getProfileInfo() {
    return `Name is ${this.#name}, and salary is ${this.#baseSalary}`;
  }
}

class Developer extends Employee {
  #mainLanguage;
  #bugsFixed = 0;

  constructor(name, baseSalary, mainLanguage) {
    super(name, baseSalary);
    this.#mainLanguage = mainLanguage;
  }

  writeCode() {
    return `This developer writes ${this.#mainLanguage}`;
  }

  fixBug() {
    ++this.#bugsFixed;
    return `Bug has been fixed, total fixed bugs ${this.#bugsFixed}`;
  }

  calculateDeveloperPay() {
    return this.calculatePay() * this.#bugsFixed;
  }
}

class Manager extends Employee {
  #teamSize;
  #successfulDeals = 0;

  constructor(name, baseSalary, teamSize = 0) {
    super(name, baseSalary);
    this.#teamSize = teamSize;
  }

  conductMeeting() {
    return `Meeting is active, the team size is ${this.#teamSize}`;
  }

  closeDeal() {
    ++this.#successfulDeals;
    return `Successful deals count is ${this.#successfulDeals}`;
  }
}

const jamesDeveloper = new Developer("James", 900, "JavaScript");

jamesDeveloper.fixBug();
jamesDeveloper.fixBug();
jamesDeveloper.fixBug();

console.log(jamesDeveloper.calculateDeveloperPay());

const johnManager = new Manager("John", 500, 20);

console.log(johnManager.conductMeeting());

johnManager.closeDeal();

console.log(johnManager);