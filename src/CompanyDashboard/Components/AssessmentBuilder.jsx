import { useState } from 'react';

export default function AssessmentBuilder() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [answerOptions, setAnswerOptions] = useState(['']);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      question: questionText,
      options: answerOptions,
      correct: correctAnswers,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setAnswerOptions(['']);
    setCorrectAnswers([]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...answerOptions];
    newOptions[index] = value;
    setAnswerOptions(newOptions);
  };

  const toggleCorrect = (option) => {
    if (correctAnswers.includes(option)) {
      setCorrectAnswers(correctAnswers.filter((item) => item !== option));
    } else {
      setCorrectAnswers([...correctAnswers, option]);
    }
  };

  return (
<div class="w-full max-w-4xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
  <div class="flex items-center justify-between">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">UI Design Fundamentals & Best Practice</h2>
    <button class="text-sm text-blue-600 hover:underline dark:text-blue-400">Preview</button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <aside class="md:col-span-1 space-y-4">
      <ul class="space-y-2">
        <li class="text-sm text-gray-700 dark:text-gray-300">1. What does UI stand for?</li>
        <li class="text-sm text-gray-700 dark:text-gray-300">2. Which aspect of UI design...</li>
        <li class="text-sm text-gray-700 dark:text-gray-300">3. How to export a pl...</li>
        <li class="text-sm text-gray-700 dark:text-gray-300">4. Which term refers to...</li>
        <li class="text-sm text-gray-700 dark:text-gray-300">5. Why is maintaining co...</li>
        <li class="text-sm font-medium text-blue-600 dark:text-blue-400">6. When selecting a style</li>
      </ul>
      <button class="mt-4 w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Result Screen</button>
    </aside>

    <section class="md:col-span-3 space-y-6">
      <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-800 dark:text-white">Question 6</h3>
          <div class="flex items-center gap-3">
            <span class="text-xs text-gray-600 dark:text-gray-400">Required</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer"/>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        </div>

        <div class="space-y-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            When selecting a style <span class="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium">Direction</span> for designing within a company, the most suitable style is often the <span class="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium">Corporate</span> style.
          </p>

          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">Direction</span>
            <span class="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">Corporate</span>
            <span class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">Flat Design</span>
            <span class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">Skeuomorphism Design</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between mt-6 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <label>Estimation time:</label>
            <input type="number" value="2" class="w-12 px-1 py-0.5 rounded border dark:bg-gray-900 dark:border-gray-700" /> Mins
          </div>
          <div class="flex items-center gap-2">
            <label>Mark as point:</label>
            <input type="number" value="1" class="w-12 px-1 py-0.5 rounded border dark:bg-gray-900 dark:border-gray-700" /> Points
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-4">
        <button class="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">Create from Scratch</button>
        <button class="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create with AI</button>
      </div>
    </section>
  </div>
</div>

  );
}
