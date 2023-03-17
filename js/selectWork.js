import {workList} from '../config/workList.js';
import pkg from 'enquirer';
const {MultiSelect} = pkg;

const selectWork = (question, txt) => {
  const prompt = new MultiSelect({
    message: question,
    choices: workList,
  });

  return prompt
    .run()
    .then((answer) => {
      return `${txt + answer.join(",")}`;
    })
    .catch(console.error);
};

export {selectWork};
