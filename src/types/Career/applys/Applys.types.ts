export interface ICareerApply {
  _id: string;
  career_id: string;
  personalInfo: PersonalInfo;
  education: IEducation[];
  workExperience: IWorkExperience;
  skills: ISkill[];
  software: ISkill[];
  languages: ISkill[];
  description: string;
  expectedSalary: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ISkill {
  name: string;
  level: string;
}

export interface IWorkExperience {
  lastSalary: string;
  insuranceDuration: string;
  usedUnemploymentInsurance: string;
  works: IWork[];
}

export interface IWork {
  organization: string;
  roles?: string[];
  terminationReason: string;
  duration?: string;
  role?: string;
}

export interface IEducation {
  fieldOfStudy: string;
  level: string;
  gpa: string;
  institute: string;
}

interface PersonalInfo {
  fullName: string;
  nationalId: string;
  birthDate: string;
  birthPlace: string;
  issuePlace: string;
  maritalStatus: string;
  militaryStatus: string;
  fatherName: string;
  fatherJob: string;
  insuranceHistory: string;
  phoneNumber: string;
}
