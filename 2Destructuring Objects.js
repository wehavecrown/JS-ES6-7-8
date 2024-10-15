//WRITE SHORTHAND CODE TO REASSIGN VALUES

const personalInfo = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: first, lastName: last} = personalInfo;

console.log(`${first} ${last}`);