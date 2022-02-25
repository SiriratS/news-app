import { GetterTree } from 'vuex';
import State from './headline.state';

const getters: GetterTree<State, State> = {
  loading(state: State) {
    return state.isLoading;
  },
};

export default getters;
