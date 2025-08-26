import axios from "axios";

export const addCategory=async(category)=>{
    return await axios.post('htpp://localhost:8001/categories',category);
}

export const deleteCategory=async(categoryId)=>{
    return await axios.delete(`htpp://localhost:8001/categories/${categoryId}`)
}
export const fetchCategory=async()=>{
    return await axios.delete('htpp://localhost:8001/categories/listCategory')
}
