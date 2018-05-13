import {newGame, makeGuess} from '../actions/game';
import {wordList, randomWord} from '../lib/game';
// import {wordList} from

export default (state = [], { type, payload } = {}) => {
	switch (type) {
	  case 'NEW_GAME':
			return payload

	  default:
	    return state
	}
}
