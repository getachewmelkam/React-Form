export const Fname = (name) => {
    return {
        type:'NAME',
        payload: name
    }
}
export const Lname = (Lname) => {
    return {
        type:'LNAME',
        payload: Lname
    }
}

export const gender = (gender) => {
    return {
        type:'GENDER',
        payload: gender
    }
}
export const Age = (Age) => {
    return {
        type:'AGE',
        payload: Age
    }
}
export const Profession = (Profession) => {
    return {
        type:'PROFESSION',
        payload: Profession
    }
}