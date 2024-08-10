import { useState, React } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', {email, password})
    .then(result => {
      if(result.data.status == 200) {
        alert(result.data.role);
      }
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-3 rounded w-96">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block">
              <strong>Email</strong>
            </label>
            <input 
            type="text"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block">
              <strong>Password</strong>
            </label>
            <input 
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
            className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit"
          className="bg-green-500 text-white py-2 x-4 rounded-none w-full hover:bg-green-600 focus:outline-none focus:ring-2 
          focus:ring-opacity-50"
          >Login</button>
        </form>
        <p className="mb-3">Don't have an account?</p>
        <Link to="/register" className="border border-gray-300 bg-gray-200 text-gray-900 rounded-none w-full py-2 px-4 
        no-underline hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >Sign Up</Link>
      </div>
    </div>
      
  )
}

export default Login
