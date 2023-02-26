import './login.css'

function Login() {
  return (
    <div className='login'>
       <form action="" className='form'>
        <div >
       <div className='input-container'>
       <label htmlFor="">Username</label><br />
       <input type="text" value="" />
       </div>
       <div lassName='input-container'>
       <label htmlFor="">Password</label><br />
       <input type="text" />
       </div>
       <button >submit</button>
       </div>
       </form>
    </div>
  )
}

export default Login