import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard1299191Reducer from '../features/Dashboard1299191/redux/reducers'
import CalendarView699187Reducer from '../features/CalendarView699187/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard1299191: Dashboard1299191Reducer,
CalendarView699187: CalendarView699187Reducer,

});