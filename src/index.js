import {createStore} from "redux";

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'RND':
			return state + action.payLoad;

		case 'INC':
			return state + 1;

		case 'DEC':
			return state - 1;

		default:
			return state;
	}
};

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = store.getState();
};

const store = createStore(reducer);

document
	.getElementById('inc')
	.addEventListener('click', () => {
		store.dispatch({type: 'INC'});
	});

document
	.getElementById('dec')
	.addEventListener('click', () => {
		store.dispatch({type: 'DEC'});
	});

document
	.getElementById('rnd')
	.addEventListener('click', () => {
		const payload = Math.floor(Math.random() * 10);

		store.dispatch({
			type: 'RND',
			payLoad: payload
		});
	});

store.subscribe(update);