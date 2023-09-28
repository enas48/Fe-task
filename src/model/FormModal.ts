// export interface FoemData {
//     coverImage: string;
//     personalpersonalProprmation: personalpersonalProprmation;
//     profile:profile;
//     customisedQuestions:customisedQuestions;
//   }

export interface personal {
    firstName: string;
    lastName: string;
    emailId: string;
    phoneNumber: personalProp;
    nationality: personalProp;
    currentResidence: personalProp;
    idNumber: personalProp;
    dateOfBirth: personalProp;
    gender: personalProp;
}
export interface personalProp {
    internalUse: boolean;
    show: boolean
}
export interface profileProp {
    mandatory: boolean;
    show: boolean
}
export interface profile {
    education: profileProp
    experience: profileProp
    resume: profileProp
}
export interface customisedQuestions {
    id: string;
    type: string;
    question: string;
    choices: string[];
    maxChoice: number;
    disqualify: boolean;
    other: boolean
    additionalInfo: string
    duration: number
    time: string

}