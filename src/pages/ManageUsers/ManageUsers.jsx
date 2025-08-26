import './ManageUsers.css'
import UserForm from '../../compenets/UsersForm/UserForm';
import UsersLsit from '../../compenets/UsersList/UsersList';
const ManageUsers=()=>{
    return(
      <div className="users-container taxt-light">
         <div className="left-column">
           <UserForm/>
        </div>
        <div className="right-column">
           <UsersLsit/>
        </div>
    </div>
    )
}
export default ManageUsers;