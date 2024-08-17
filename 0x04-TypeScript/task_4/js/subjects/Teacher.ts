namespace Subjects {
  export interface Teacher {
      firstName: string;
      lastName: string;
  }
}

/// <reference path="Teacher.ts" />

namespace Subjects {
  // Create and export one Teacher object with experienceTeachingC = 10
  export const cTeacher: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      experienceTeachingC: 10
  };
}