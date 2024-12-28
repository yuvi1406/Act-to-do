import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props) {
    const users = props.users
    const navigate = useNavigate()
    const [eUsername, setEuserName] = useState()
    const [ePassword, setEpassword] = useState()
    const [rUser, setRuser] = useState(true)

    function handleUname(event) {
        setEuserName(event.target.value)
    }
    function handlePword(event) {
        setEpassword(event.target.value)
    }
    function checkUser() {
        var userFound = false
        console.log(users)
        users.forEach(function (item) {
            if (item.userName === eUsername && item.password === ePassword) {
                console.log("Login successful")
                userFound = true
                setRuser(true)
                navigate('/landing', { state: { user: eUsername } })
            }
        })
        if (userFound === false) {
            console.log("login failed")
            setRuser(false)
        }
    }
    return (
        <>
            <div className="bg-black p-10 ">
                <div className="bg-white p-10 ">
                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    {rUser ? <p>I help you to manage your activities after you login :)</p> : <p className="text-red-500">Please signup!!</p>}

                    <div className=" rounded-md flex flex-col">
                        <input value={eUsername} onChange={handleUname} type="text" placeholder="User name" className=" bg-transparent p-2 my-2 border border-black rounded w-52" />
                        <input value={ePassword} onChange={handlePword} type="Password" placeholder="Password" className=" bg-transparent p-2 my-2 border border-black rounded w-52" />
                        <button className="bg-violet-400 border rounded-md w-20 p-2" onClick={checkUser}>Login</button>
                    </div>
                    <p>Don't have an account?<Link className="underline" to={'/signup'}>Signup</Link></p>
                </div>
            </div>
        </>
    )
}
export default Login
