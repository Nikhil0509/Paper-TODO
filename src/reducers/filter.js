import { SET_FILTER } from '../actions/action-types';
import { FILTER_ALL } from '../actions/filter';

const storedFilter = localStorage.getItem('filter') || FILTER_ALL;

const filter = (state = storedFilter, action) => {
    switch(action.type) {
        case SET_FILTER:
            localStorage.setItem('filter', action.filter);
            return action.filter;
        default:
            return state;
    }
}

export default filter;