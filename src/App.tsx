import { Counting } from './Counting';


function App() {
  return (
    <>
      <span>learn react</span>
      <Login />
      <Counting />
    </>
  )
}

export default App

export function Login() {
  return(
    <form>
      <div>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div>
        <input type="password" name="password" placeholder="password" />
      </div>

      <div>
        <button type="button">Sign In</button>
        <button type="button">Sign Up</button>
      </div>
    </form>
  
  )
}

