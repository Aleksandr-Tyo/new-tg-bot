const questions = require('./questions.json');
const {Random} = require('random-js');

const getRandomQuestion = (topic) => {
    const random = new Random();
    let questionTopic = topic.toLowerCase();

    if (questionTopic === 'случайный вопрос') {
        const topicKeys = Object.keys(questions);
        questionTopic = topicKeys[random.integer(0, topicKeys.length - 1)];
    }

    const randomQuestionIndex = random.integer(0, questions[questionTopic].length - 1);

    return {
        question: questions[questionTopic][randomQuestionIndex],
        questionTopic: questionTopic
    };
};


const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id);

    if (!question.hasOptions) {
        return question.answer;
    }

    return question.options.find((option) => option.isCorrect).text;
}

module.exports = {getRandomQuestion, getCorrectAnswer}