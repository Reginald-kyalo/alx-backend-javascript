/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

import { cpp } from './subjects/Cpp';
import { java } from './subjects/Java';
import { react } from './subjects/React';
import { cTeacher } from './subjects/Teacher';

// Set cTeacher as the teacher for Cpp
cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set cTeacher as the teacher for Java
java.setTeacher(cTeacher);
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set cTeacher as the teacher for React
react.setTeacher(cTeacher);
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
