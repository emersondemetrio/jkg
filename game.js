let matches = [];

const playerHasWin = () => matches.length === keyWords.length;
const showYouWin = () => document.getElementById('youwin').classList = 'show alert-success';
const showYouLose = () => document.getElementById('youlose').classList = 'show alert-danger';
const showTryAgain = () => document.getElementById('tryagain').classList = 'btn btn-primary';

const input = document.getElementById('input');
const disaInput = () => input.setAttribute('disabled', 'disabled');
const enableInput = () => input.removeAttribute('disabled');
const resetInput = () => input.value = '';

const disableStart = () => document
	.getElementById('start')
	.setAttribute('disabled', 'disabled');

const timer = document.getElementById('timer');
const table = document.getElementById('table');

const getMatches = c => {
	return matches.includes(c) ? c : '';
};

const updateView = () => {
	let content = '<tr>';
	let control = 0;

	keyWords.forEach((k,
		index) => {
		content += `<td style="width: 100px; height: 40px">${getMatches(k)}</td>`;
		control++;
		if (control > 10) {
			control = 0;
			content += '</tr>';
			if (index + 1 < keyWords.length) {
				content += '<tr>';
			}
		}
	});

	table.innerHTML = content;
};

updateView();

const isAMach = word => {
	if (!matches.includes(word) && keyWords.includes(word)) {
		matches.push(word);
		return true;
	}

	return false;
};

const informMatches = () => {
	const d = document.getElementById('matches');
	d.innerHTML = `Matches: ${matches.length} / ${keyWords.length}`;
};

let from = 5 * 60;
let timerInterval = null;

const stopTimer = hasWin => {
	hasWin ? showYouWin() : showYouLose();
	clearInterval(timerInterval);
};

const decreaseTime = () => {
	from = from - 1;
	const date = new Date(null);
	date.setSeconds(from);
	timer.innerHTML = date.toISOString().substr(11, 8);

	if (from === 0) {
		disaInput();
		showTryAgain();
		stopTimer(false);
		from = 5 * 60;
	}
};

const startTimer = () => {
	timerInterval = setInterval(decreaseTime, 1000);
};

const startGame = () => {
	startTimer();
	enableInput();
	input.focus();
	disableStart();
};

const receiveWord = value => {
	if (isAMach(value)) {
		informMatches();
		updateView();
		resetInput();
	}

	if (playerHasWin()) {
		input.removeEventListener('keyup', receiveWord);
		disaInput();
		showYouWin();
		showTryAgain();
		stopTimer(true);
	}
};

input
	.addEventListener('keyup', evt => receiveWord(evt.target.value || ''));

document
	.getElementById('tryagain')
	.addEventListener('click', () => window.location.reload());

document
	.getElementById('start')
	.addEventListener('click', () => startGame());
