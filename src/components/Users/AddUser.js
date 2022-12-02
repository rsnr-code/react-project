import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return ( 
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="username">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>  
        </Card>
     );
}
 
export default AddUser;