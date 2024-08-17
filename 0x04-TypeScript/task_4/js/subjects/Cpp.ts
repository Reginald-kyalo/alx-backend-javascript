
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingC
  export interface Teacher {
      experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
      public getRequirements(): string {
          return 'Here is the list of requirements for Cpp';
      }

      public getAvailableTeacher(): string {
          if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC === 0) {
              return 'No available teacher';
          }
          return `Available Teacher: ${this.teacher.firstName}`;
      }
  }

  export const cpp = new Cpp({ firstName: 'Default', lastName: 'Teacher' });
}