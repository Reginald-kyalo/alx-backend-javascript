interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: true
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName:string, lastName:string):string;
}

const printTeacher: printTeacherFunction = (firstName:string, lastName:string) => {
  return `${firstName.charAt(0)}. ${lastName}`
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
      return "Working from home";
  }

  getCoffeeBreak(): string {
      return "Getting a coffee break";
  }

  workDirectorTasks(): string {
      return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
      return "Cannot work from home";
  }

  getCoffeeBreak(): string {
      return "Cannot have a break";
  }

  workTeacherTasks(): string {
      return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
      if (salary < 500) {
          return new Teacher();
      } else {
          return new Director();
      }
  } else if (typeof salary === 'string' && !isNaN(Number(salary))) {
      const numericSalary = Number(salary);
      if (numericSalary < 500) {
          return new Teacher();
      } else {
          return new Director();
      }
  } else {
      throw new Error("Invalid salary input");
  }
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
  } else {
      console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
      return 'Teaching Math';
  } else if (todayClass === 'History') {
      return 'Teaching History';
  } else {
      throw new Error('Invalid class subject');
  }
}