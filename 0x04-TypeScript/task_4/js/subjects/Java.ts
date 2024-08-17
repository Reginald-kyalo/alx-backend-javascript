
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingJava
  export interface Teacher {
      experienceTeachingJava?: number;
  }

  export class Java extends Subject {
      public getRequirements(): string {
          return 'Here is the list of requirements for Java';
      }

      public getAvailableTeacher(): string {
          if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava === 0) {
              return 'No available teacher';
          }
          return `Available Teacher: ${this.teacher.firstName}`;
      }
  }
  export const java = new Java({ firstName: 'Default', lastName: 'Teacher' });
}