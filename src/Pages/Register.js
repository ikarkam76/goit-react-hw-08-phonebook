import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "Redux/auth/authOperation";

export const RegisterPage = () => {
  const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
     switch (event.target.name) {
         case"name":
             setName(event.target.value);
             break;
         case "email":
             setEmail(event.target.value);
             break;
         case "password":
             setPassword(event.target.value);
             break;
         default:
             return;
        }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('')
    }

    return (
      <div>
        <button>
          <Link to="/">Go back</Link>
        </button>
        <p></p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="your login"
            />
          </label>
          <p></p>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="your email"
            />
          </label>
          <p></p>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="min 7 symbols"
            />
          </label>
          <p></p>
          <button type="submit">Register</button>
        </form>
      </div>
    );
}