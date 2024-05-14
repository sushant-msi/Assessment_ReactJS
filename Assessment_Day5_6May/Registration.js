import { useState, useRef } from "react";
import styles from "./Registration.module.css";
import axios from 'axios';
 
function Registration() {
    const inputRefName = useRef(null);
    const inputRefPhone = useRef(null);
    const inputRefEmail = useRef(null);
    const inputRefPass = useRef(null);

    var user = {
        name: '',
        email: '',
        phone: '',
        password: ''
             
    }
 
    // define state to maintain the error messages
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
   
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        //reset the error state.
 
        setErrors({
            name: '',
            email: '',
            phone: '',
            password: ''
        });

       user = {
            //name: document.getElementById('name').value,
            name: inputRefName.current.value,
            email: inputRefEmail.current.value,
            phone: inputRefPhone.current.value,
            password: inputRefPass.current.value
        };
 
        // validate the user object
        // if the name field is empty   set the error message name is required
 
        if (user.name === '') { 
            setErrors((prevState) => ({
                ...prevState,
                name: '*Name is required',
            }));
 
        }
        else if(user.name.length < 3)
        {
            setErrors((prevState) => ({
                ...prevState,
                name: '*Name must contain at least 3 characters',
            })); 
        }
        // if the email field is empty   set the error message email is required
 
        if (user.email === '') {
            setErrors((prevState) => ({
                ...prevState,
                email: '*Email is required',
            }));
        }
        else if (!user.email.match('^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\\.[A-Za-z]{2,}'))
        {
            setErrors((prevState) => ({
                ...prevState,
                email: '*Email is not valid',
            }));
        }
        // if the phone field is empty   set the error message phone is required
        if(user.phone === ''){
            setErrors((prevState) => ({
                ...prevState,
                phone: '*Phone is required',
            }));
        }
        else if (!user.phone.match('^[0-9]{10}$'))
        {
            setErrors((prevState)=>({
                ...prevState,
                phone: '*Phone number must contain 10 digits'
            }));
        }

        // if the password field is empty   set the error message phone is required
        if(user.password === ''){
            setErrors((prevState) => ({
                ...prevState,
                password: '*Password is required',
            }));
        }
        //must contain one small case character, one capital case character and one digit
        else if (!user.password.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'))
        {
            setErrors((prevState) => ({
                ...prevState,
                password: '*Password should be at least 8 characters long and must contain at least: one of each small case, capital case and number',
            }));
        }

       if (errors.name === '' && user.name !== '' && errors.phone === '' && user.phone !== '' && errors.email === '' && user.email !== '' && errors.password === '' && user.password !== ''){
            axios.post('http://localhost:5000/api/users',user)
            .then(response => {
                console.log('User created successfully');
                console.log(response.data);
                window.alert('User Registered successfully');
            })
            .catch(error => {
                console.log(error);
                window.alert("Something went wrong while registering");
            })
       }    
     }

    function handleDelete(e)
     {

        e.preventDefault();
        console.log(user);
        //reset the error state.
 
        setErrors({
            name: '',
            email: '',
            phone: '',
            password: ''
        });

       user = {
            //name: document.getElementById('name').value,
            name: inputRefName.current.value,
            email: inputRefEmail.current.value,
            phone: inputRefPhone.current.value,
            password: inputRefPass.current.value
        };
        
        if (user.name === '' ) {
            setErrors((prevState) => ({
                    ...prevState,
                    name: '*Name is required for Deletion',
                }));
     
        } 
       
       //calling api to delete the user 
       if (user.name !== '' && errors.name === ''){
            axios.delete(`http://localhost:5000/api/users/${user.name}`)
            .then(response => {
                console.log(response.data);
                window.alert("User deleted successfully");
            })
            .catch(error => {
                console.log(error);
                window.alert("Name not found");
            })
       }
      
    }

    function handleUpdate(e)
     {
        e.preventDefault();
        console.log(user);
        //reset the error state.
 
        setErrors({
            name: '',
            email: '',
            phone: '',
            password: ''
        });

       user = {
            //name: document.getElementById('name').value,
            name: inputRefName.current.value,
            email: inputRefEmail.current.value,
            phone: inputRefPhone.current.value,
            password: inputRefPass.current.value
        }; 

       if (user.name === '') {
            setErrors((prevState) => ({
                    ...prevState,
                    name: '*Name is required for Updation',
                }));
            } 
       else if(user.name.length < 3)
       {
            setErrors((prevState) => ({
                ...prevState,
                name: '*Name must contain at least 3 characters',
            })); 
       } 

       if (user.email === '') {
            setErrors((prevState) => ({
                    ...prevState,
                    email: '*New email can not be empty',
                }));
       }
       else if (!user.email.match('^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\\.[A-Za-z]{2,}'))
       {
            setErrors((prevState) => ({
                ...prevState,
                email: '*Email is not valid',
            }));
       }  

       if (user.phone === '') {
            setErrors((prevState) => ({
                    ...prevState,
                    phone: '*New phone number can not be empty',
                }));
        } 
       else if (!user.phone.match('^[0-9]{10}$'))
       {
            setErrors((prevState)=>({
                ...prevState,
                phone: '*Phone number must contain 10 digits'
            }));
       }         
        
       if (user.password === '') {
            setErrors((prevState) => ({
                    ...prevState,
                    password: '*New password can not be empty',
                }));
       }
       else if (!user.password.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'))
       {
            setErrors((prevState) => ({
                ...prevState,
                password: '*Password should be at least 8 characters long and must contain at least: one of each small case, capital case and number',
            }));
       }
       
       //calling api to update user details if no errors
       if (user.name !== '' && user.phone !== '' && user.email !== '' && user.password !== '' && errors.name === '' && errors.phone === '' && errors.email === '' && errors.password === ''){
            axios.put(`http://localhost:5000/api/users/${user.name}`,user)
            .then(response => {
                console.log(response.data);
                window.alert("User updated successfully");
            })
            .catch(error => {
                console.log(error);
                window.alert("Name not found");
            })
      }

        
 
    }
    return (       
        <form  className={styles.loginForm}>
        <h1 className={styles.topic}>User Registration</h1>    
        <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <br></br>
            <input
                type="text"
                id="name"
                name="name"
                className={!errors.name ? styles.validinput:styles.invalidinput}
                ref = {inputRefName}
            />
            {/* if errors contains name as error display it here */}
            {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.inputGroup} >
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                className={!errors.email ? styles.validinput:styles.invalidinput}
                ref = {inputRefEmail}
            />
            {/* if errors contains email as error display it here */}
            {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.inputGroup} >
            <label htmlFor="phone" className={styles.label}>Phone Number:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className={!errors.phone ? styles.validinput:styles.invalidinput}
                ref = {inputRefPhone}
            />
            {/* if errors contains phone as error display it here */}
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
        <div className={styles.inputGroup} >
            <label htmlFor="pasword" className={styles.label}>Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                className={!errors.password ? styles.validinput : styles.invalidinput}
                ref = {inputRefPass}
            />
            {/* if errors contains password as error display it here */}
            {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <div className="action_btn">
        <button onClick={handleSubmit} type="submit" className={styles.submitButton}>Register</button>       
        <button onClick={handleDelete} type="button" className={styles.submitButton}>Delete User</button>       
        <button onClick={handleUpdate} type="button" className={styles.submitButton}>Update User</button>
        </div>
    </form>
    );
 
}
 
export default Registration;