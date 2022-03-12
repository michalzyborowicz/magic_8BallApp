const ballBtn = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const getAnswer = () => {
	const answers = ['yes', 'no', 'ask again', 'You dont want to know...']
	answer.innerHTML = `<span>Answer is:</span> ${answers[Math.floor(Math.random() * answers.length)]}`

	error.textContent = ''
	input.value = ''
}
const errorCheck = () => {
	if (input.value !== '' && input.value.includes('?')) {
		getAnswer()
	} else if (input.value === '') {
		error.textContent = 'You have to ask question first!'
		answer.textContent = ''
	} else if (input.value.indexOf('?') === -1) {
		error.textContent = 'You forgot about question mark:)'
		answer.textContent = ''
	}

	ballBtn.classList.remove('shake-animation')
}

const shakeBall = () => {
	ballBtn.classList.add('shake-animation')
	setTimeout(errorCheck, 1000)
}
ballBtn.addEventListener('click',shakeBall)
