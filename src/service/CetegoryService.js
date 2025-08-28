import axios from "axios";

export const addCategory=async(category)=>{
    return await axios.post('htpp://localhost:8001/categories',category);
}

export const deleteCategory=async(categoryId)=>{
    return await axios.delete(`http://localhost:8001/categories/${categoryId}`)
}
export const fetchCategories=async()=>{
    return await axios.get('http://localhost:8001/categories/listCategory')
}
