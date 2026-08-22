class Employee {
  #name;
  #baseSalary;

  constructor(name, baseSalary) {
    if (baseSalary <= 0) {
      throw new Error("Salary can't be negative or 0");
    }
    this.#name = name;
    this.#baseSalary = baseSalary;
  }

  set baseSalary(salary) {
    if (salary <= 0) {
      throw new Error("Salary should be positive");
    }
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
    if (teamSize < 0) {
      throw new Error("Team size can't be negative");
    }

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

const johnManager = new Manager("John", 900, 90);

console.log(johnManager.conductMeeting());

johnManager.closeDeal();

console.log(johnManager);
