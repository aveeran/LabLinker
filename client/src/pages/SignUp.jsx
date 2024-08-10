import { useState, React} from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', {name, email, password})
        .then(result => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }


  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-3 rounded w-96">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="block">
            <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="block">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 x-4 rounded-none w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
          <p className="mb-3">Already have an account</p>
          <Link to="/login" className="border border-gray-300 bg-gray-200 text-gray-900 rounded-none w-full py-2 px-4 no-underline hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Login
          </Link>
      </div>
    </div>
  );
};

export default SignUp;
