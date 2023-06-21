import { useForm } from 'react-hook-form';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]= useState({})
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit((e) => {
          setData(e)
          console.log(data);
      })}>
        <label>Name:</label>
        <input {...register("firstname", { required: 'this field is required..' })}
          type='text' placeholder='Firstname...' />
        <span>{errors.firstname?.message}</span>

        <label>Age:</label>
        <input {...register("age", { required: 'age is required..', minLength: 1 })}
          type='number' placeholder='Age...' />
        <span className="error">{errors.age?.message}</span>

        <label>Email:</label>
        <input {...register("email", { required: 'email is required..' })}
          type='email' placeholder='Email...' />
        <span className="error">{errors.email?.message}</span>

        <label>Create Password:</label>
        <input {...register("password", { required: 'this field is required..', 
        minLength: { 
          value: 6,
          message: "Password should be atleast 6 characters.. "
        } 
      })}
          type='password' placeholder='Password...' />
         <span>{errors.password?.message}</span>

        <button type="submit">Sign Up</button>
      </form>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default App;