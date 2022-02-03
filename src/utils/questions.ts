const questions = (nameOfTheObject: string) => [
  {
    type: 'input',
    name: 'details',
    message: `${nameOfTheObject} details`,
  },
];

export default questions;
