import { GetterTree } from 'vuex';
import State from './state';

const getters: GetterTree<State, State> = {
  isOpenFilter(state: State) {
    return state.isOpenFilter;
  },
};

export default getters;
