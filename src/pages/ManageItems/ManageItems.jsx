import './ManageItems.css'
import ItemForm from '../../compenets/ItemForm/ItemForm';
import ItemList from '../../compenets/ItemList/ItemList';
const ManageItems =()=>{
    return(
       <div className="items-container taxt-light">
         <div className="left-column">
          <ItemForm/>
        </div>
        <div className="right-column">
            <ItemList/>
        </div>
    </div>
    )
}
export default ManageItems;