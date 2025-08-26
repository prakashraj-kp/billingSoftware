const ItemForm=()=>{
    return(
        <div className="item-form-container"  style={{height:'100hv',overflowY:'auto',overflowX:'hidden'}}>
    <div className="mx-2 mt-2">
    <div className="row">
        <div className="card col-md-8 form-container">
            <div className="card-body">
                <form>
                    <div className="mb-3">
                       <label htmlFor="image" className="form-label">
                        <img src="https://placehold.co/48x48" alt=""  width={48}/>
                        </label> 
                        <input type="file" name="image" id="image" className="form-control" hidden/>                  
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" 
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Item Name"/>
                        </div>
                        <div className="mb-3">
                             <label htmlFor="category" className="form-label">
                                Category
                             </label>
                             <select name="category" id="category" className="form-control">
                                <option value="">--SELECT CATEGORY--</option>
                                <option value="">Category 1</option>
                                 <option value="">Category 1</option>
                             </select>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="price" className="form-label">Price</label>
                           <input type="number" name="price" id="price"  className="form-control"placeholder="&#8377;" />
                        </div>
                         <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea type="text"
                            rows="5" 
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Write Content here...">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-warning w-100">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
     </div> 
    );
}
export default ItemForm;