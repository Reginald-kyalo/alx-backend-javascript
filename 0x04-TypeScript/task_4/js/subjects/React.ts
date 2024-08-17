/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingReact
  export interface Teacher {
      experienceTeachingReact?: number;
  }

  export class React extends Subject {
      public getRequirements(): string {
          return 'Here is the list of requirements for React';
      }

      public getAvailableTeacher(): string {
          if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact === 0) {
              return 'No available teacher';
          }
          return `Available Teacher: ${this.teacher.firstName}`;
      }
  }
  export const react = new React({ firstName: 'Default', lastName: 'Teacher' });
}
