export const addManager = (data) => {
    return{
        type: "SAVE_MANAGER",
        payload:data,
    }
}

export const editManager = (ename, email, role, mobile, join, image,id) => {
    return{
        type: "EDIT_MANAGER",
        payload:{ename, email, role, mobile, join, image, id }
    }
}