/**
 * 里面存放所有的actions
 */
import * as TYPES from './mutations-types';

const actions = {
	ADD1000(context){
		context.commit(TYPES.SET_COUMT_ADD, 1000);
	},
	REdUCE1000(context){
		context.commit(TYPES.SET_COUMT_REDUCE,1000);
	}
};

export default actions;