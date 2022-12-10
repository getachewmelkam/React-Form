import { combineReducers } from "redux";
import { Age, fname, Lname, Gender, Profession } from "./reducer";

export const reducers = combineReducers({
    firstName: fname,
    lastName: Lname,
    gender: Gender,
    age: Age,
    profession: Profession,
})