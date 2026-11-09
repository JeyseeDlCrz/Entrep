const startBtn = document.querySelector('.start_btn');
const appQuiz = document.querySelector('.app');
const mainPage = document.querySelector('.main');

const questions = [
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to -\\infty} \\frac{x^2 - \\sin(x)}{\\sqrt{x^4 + 1}}\\)",
    sol: "Assets/f1.png",
    answers: [
      { text: "0", correct: false },
      { text: "-1", correct: false },
      { text: "1", correct: true },
      { text: "∞", correct: false }
    ]
  },
  {
    question: "Determine the values of a and b so that the function is continuous everywhere: \\(f(x)=\\begin{cases} ax-3, & x<1 \\\\ bx - \\frac{1}{2}, & 1 \\le 3 \\\\ \\frac{x^2-(b-2)x+a-4}{x-2}, & x>3 \\end{cases}\\)",
    sol: "Assets/f2.png",
    answers: [
      { text: "a = \\frac{7}{4}, b = \\frac{17}{2}", correct: false },
      { text: "a = \\frac{7}{2}, b = \\frac{17}{4}", correct: false },
      { text: "a = \\frac{17}{2}, b = \\frac{7}{4}", correct: false },
      { text: "a = \\frac{17}{4}, b = \\frac{7}{2}", correct: true }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 5^-} \\frac{|x-5|}{2x^2-11x+5}\\)",
    sol: "Assets/f3.png",
    answers: [
      { text: "\\frac{1}{9}", correct: false },
      { text: "-\\frac{1}{9}", correct: true },
      { text: "-\\frac{1}{5}", correct: false },
      { text: "\\frac{1}{5}", correct: false }
    ]
  },
  {
    question: "Determine the horizontal asymptote of the function: \\(f(x)=\\frac{x^4-2\\cos(2x)}{2\\sqrt{x^8-2}+1}\\)",
    sol: "Assets/f4.png",
    answers: [
      { text: "\\frac{1}{2}", correct: true },
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 2} \\frac{x^3 + x^2-4x-4}{x-2}\\)",
    sol: "Assets/f5.png",
    answers: [
      { text: "12", correct: true },
      { text: "16", correct: false },
      { text: "4", correct: false },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Let \\(f(x)=x^3-x^2+2x-5\\). Use the Intermediate Value Theorem to find the value of \\(c \\in [0,2]\\) such that \\(f(c)=-3\\).",
    sol: "Assets/f6.png",
    answers: [
      { text: "\\sqrt{2}", correct: false },
      { text: "1", correct: true },
      { text: "\\frac{1}{2}", correct: false },
      { text: "\\frac{3}{2}", correct: false }
    ]
  },
  {
    question: "Suppose \\(f(x)=x^2-2x+4\\). Find the absolute minimum and maximum values of \\(f\\) on the interval \\([0,3]\\).",
    sol: "Assets/f7.png",
    answers: [
      { text: "Absolute Minima: (1,3)  Local Maxima: (3,7)", correct: true },
      { text: "Absolute Minima: (3,7)  Local Maxima: (1,3)", correct: false },
      { text: "Absolute Minima: (2,5)  Local Maxima: (4,9)", correct: false },
      { text: "Absolute Minima: (4,9)  Local Maxima: (2,5)", correct: false }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 0} \\frac{e^{4x}-e^{3x}}{5x}\\)",
    sol: "Assets/f8.png",
    answers: [
      { text: "0", correct: false },
      { text: "\\frac{7}{5}", correct: false },
      { text: "\\frac{1}{5}", correct: true },
      { text: "1", correct: false }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 5^+} \\left(\\frac{1}{x-5}\\right) \\left(\\frac{x-1}{4}-1\\right)\\)",
    sol: "Assets/f9.png",
    answers: [
      { text: "\\frac{1}{2}", correct: false },
      { text: "\\frac{1}{4}", correct: true },
      { text: "1", correct: false },
      { text: "\\infty", correct: false }
    ]
  },
  {
    question: "Determine the horizontal asymptote of the function: \\(f(x)=\\frac{2\\lfloor x \\rfloor +1}{x^2}\\)",
    sol: "Assets/f10.png",
    answers: [
      { text: "y=2", correct: false },
      { text: "y=1", correct: false },
      { text: "None", correct: false },
      { text: "y=0", correct: true }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 2} \\frac{\\sin(x^2-4)}{5x-10}\\)",
    sol: "Assets/f11.png",
    answers: [
      { text: "\\frac{4}{5}", correct: true },
      { text: "\\frac{2}{5}", correct: false },
      { text: "\\frac{1}{5}", correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    question: "Determine the values of \\(x\\) that make the function \\(f\\) discontinuous and identify the type of discontinuity: \\(f(x)=\\begin{cases} 3x+4, & x\\le -1 \\\\ \\frac{x-3}{x^2-x-6}, & -1 < x \\le 4 \\\\ \\frac{x-5}{x^2-3x-10}, & x>4 \\end{cases}\\)",
    sol: "Assets/f12.png",
    answers: [
      { text: "x=3, removable & x=5, jump essential", correct: false },
      { text: "x=3, jump essential & x=5, removable", correct: false },
      { text: "x=3, removable & x=5, removable", correct: true },
      { text: "x=3, jump essential & x=5, jump essential", correct: false }
    ]
  },
  {
    question: "Evaluate the limit: \\(\\lim_{x \\to 6} \\frac{\\sqrt[3]{x-5}-1}{x-6}\\)",
    sol: "Assets/f13.png",
    answers: [
      { text: "2", correct: false },
      { text: "\\frac{1}{3}", correct: false },
      { text: "\\frac{1}{6}", correct: true },
      { text: "3", correct: false }
    ]
  }
];

const qElt = document.getElementById('ques');
const timerElt = document.getElementById('timer');
const ansBtn = Array.from(document.querySelectorAll('#ans_btn .btn'));
const nextBtn = document.getElementById('next_btn');
const solElt = document.getElementById('sol');
const mathJax = document.getElementById('MathJax-script');

const questionTimeSec = 300;
let timeRem = 0;
let timerInt;
let currQind = 0;
let score = 0;

function getMathMarkup(text) {
  if (!text) return '';
  return text.includes('\\') ? `\\(${text}\\)` : text;
}

startBtn.addEventListener('click', () => {
  mainPage.classList.add('hidden');
  appQuiz.classList.add('active');
  startQuiz();
});

function clearMath(elements) {
  if (window.MathJax && window.MathJax.typesetClear) {
    window.MathJax.typesetClear(elements);
  }
}

function typesetMath(elements) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise(elements).catch((err) => {
      console.error('could not render', err);
    });
  }
}

if (mathJax) {
  mathJax.addEventListener('load', () => {
    typesetMath([qElt, ...ansBtn, solElt]);
  }, { once: true });

  mathJax.addEventListener('error', () => {
    console.error('could not load');
  }, { once: true });
}

function updTimer() {
  const min = String(Math.floor(timeRem / 60)).padStart(2, '0');
  const sec = String(Math.floor(timeRem % 60)).padStart(2, '0');
  timerElt.textContent = `${min}:${sec}`;
  timerElt.classList.toggle('expired', timeRem <= 10);
}

function startTimer() {
  clearInterval(timerInt);
  timeRem = questionTimeSec;
  updTimer();

  timerInt = setInterval(() => {
    timeRem -= 1;
    updTimer();
    if (timeRem <= 0) {
      finishQ(null, true);
    }
  }, 1000);
}

function startQuiz() {
  currQind = 0;
  score = 0;
  nextBtn.textContent = 'Next';
  displayQ();
}

function displayQ() {
  if (currQind >= questions.length) {
    displayScore();
    return;
  }

  const currQ = questions[currQind];
  clearInterval(timerInt);
  clearMath([qElt, ...ansBtn, solElt]);

  qElt.textContent = `${currQind + 1}. ${currQ.question}`;
  solElt.replaceChildren();
  solElt.classList.remove('visible');
  nextBtn.classList.remove('visible');
  nextBtn.disabled = false;

  ansBtn.forEach((button, index) => {
    const ans = currQ.answers[index];
    button.hidden = !ans;
    button.disabled = false;
    button.classList.remove('picked', 'correct', 'wrong', 'selected');
    button.replaceChildren();

    if (!ans) {
      button.onclick = null;
      button.removeAttribute('aria-label');
      return;
    }

    const label = document.createElement('span');
    label.textContent = getMathMarkup(ans.text);
    button.appendChild(label);
    button.setAttribute('aria-label', ans.text);
    button.onclick = () => finishQ(index, false);
  });

  typesetMath([qElt, ...ansBtn]);
  startTimer();
}

function showSol(ans, isCorrect, timesUp) {
  clearMath([solElt]);
  solElt.replaceChildren();

  if (isCorrect) {
    solElt.append(document.createTextNode('May tama ka!'));
  } else {
    solElt.append(document.createTextNode(
      timesUp ? 'Maliii! Ang tamang sagot ay ' : 'Maliii! Ang tamang sagot ay '
    ));
    const ansText = document.createElement('span');
    ansText.textContent = getMathMarkup(ans.text);
    solElt.append(ansText);
    solElt.append(document.createTextNode('.'));
  }

  const currQ = questions[currQind];
  if (currQ && currQ.sol) {
    const image = document.createElement('img');
    image.className = 'sol-image';
    image.src = currQ.sol;
    image.alt = `Solution for question no. ${currQind + 1}`;
    image.addEventListener('error', () => {
      image.alt = `Solution image not found. ${currQ.sol}`;
    });
    solElt.append(image);
  }

  solElt.classList.add('visible');
  typesetMath([solElt]);
}

function finishQ(selectedInd, timesUp) {
  if (nextBtn.classList.contains('visible')) {
    return;
  }

  clearInterval(timerInt);
  const currQ = questions[currQind];
  const correctInd = currQ.answers.findIndex((ans) => ans.correct);
  const isCorrect = selectedInd !== null && selectedInd === correctInd;

  ansBtn.forEach((button, index) => {
    button.disabled = true;
    button.classList.remove('picked', 'wrong', 'selected');

    if (index === correctInd) {
      button.classList.add('correct');
    }

    if (selectedInd !== null && index === selectedInd && !isCorrect) {
      button.classList.add('wrong');
    }

    if (selectedInd !== null && index === selectedInd && isCorrect) {
      button.classList.add('selected');
    }
  });

  if (selectedInd !== null && isCorrect) {
    score += 1;
  }

  if (selectedInd === null) {
    timerElt.textContent = "Time's up";
    timerElt.classList.add('expired');
  }

  showSol(currQ.answers[correctInd], isCorrect, timesUp);
  nextBtn.classList.add('visible');
  nextBtn.disabled = false;
}

function displayScore() {
  clearInterval(timerInt);
  clearMath([qElt, ...ansBtn, solElt]);
  timerElt.textContent = '';
  solElt.replaceChildren();
  solElt.classList.remove('visible');
  ansBtn.forEach((button) => {
    button.hidden = true;
  });
  qElt.textContent = `Naka ${score} out of ${questions.length}!`;
  nextBtn.textContent = 'Isa Pa!';
  nextBtn.classList.add('visible');
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  if (nextBtn.textContent === 'Isa Pa!') {
    currQind = 0;
    nextBtn.textContent = 'Next';
    startQuiz();
    return;
  }

  if (currQind < questions.length - 1) {
    currQind += 1;
    displayQ();
  } else {
    displayScore();
  }
});
