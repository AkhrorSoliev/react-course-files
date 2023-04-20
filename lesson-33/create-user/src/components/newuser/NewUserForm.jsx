// style
import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function NewUserForm({addUser}) {
 const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: null,
    from: '',
    image:'',
    job: '',
    gender: '',
    id:uuidv4()
 })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(user)
  }

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input type="url" 
                onChange={(e) => setUser((prev) => {
                  return {...prev, image: e.target.value}
                })} 
                required
              />
            </label>
            <label>
              <span>First Name:</span>
              <input type="text"  
                onChange={(e) => setUser((prev) => {
                return {...prev, firstName: e.target.value}
                })} 
                required
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input type="text"
              onChange={(e) => setUser((prev) => {
                return {...prev, lastName: e.target.value}
              })} 
              required/>
            </label>
            <label>
              <span>Age:</span>
              <input type="number"
              onChange={(e) => setUser((prev) => {
                return {...prev, age: e.target.value}
              })} 
              required/>
            </label>
            <label>
              <span>From:</span>
              <input type="text"
              onChange={(e) => setUser((prev) => {
                return {...prev, from: e.target.value}
              })} 
              required/>
            </label>
            <label>
              <span>Job:</span>
              <input type="text"
              onChange={(e) => setUser((prev) => {
                return {...prev, job: e.target.value}
              })} 
              required/>
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input type="radio" 
                  onChange={(e) => setUser((prev) => {
                    return {...prev, gender: e.target.value}
                  })} 
                 required name="gender" value="male"/>
              </label>
              <label>
                <small>Female</small>
                <input type="radio"
                 onChange={(e) => setUser((prev) => {
                    return {...prev, gender: e.target.value}
                 })} 
                required name="gender" value="female"/>
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
