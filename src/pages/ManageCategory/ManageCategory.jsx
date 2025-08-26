import './ManageCategory.css';
import CategoryForm from '../../compenets/categoryform/CategoryForm';
import CategoryList from '../../compenets/categoryList/CategoryList';
const ManageCategory =()=>{
    return(
    <div className="category-container taxt-light">
         <div className="left-column">
           <CategoryForm/>
        </div>
        <div className="right-column">
            <CategoryList/>
        </div>
    </div>
    )
}
export default ManageCategory;