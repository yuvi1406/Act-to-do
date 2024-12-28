import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function SignUp(props) {
    const users = props.users
    const setUsers = props.setUsers
    var navigate = useNavigate()

    const [eUsername, setEuserName] = useState()
    const [ePassword, setEpassword] = useState()

    function handleUname(event) {
        setEuserName(event.target.value)
    }
    function handlePword(event) {
        setEpassword(event.target.value)
    }
    function addUsers() {
        setUsers([...users, { userName: eUsername, password: ePassword }])
        navigate('/')
        
    }
    return (
        <>
            <div className="bg-black p-10 ">

                <div className="bg-white p-10 ">
                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    <p>I help you to manage your activities after you login :)</p>

                    <div className=" rounded-md flex flex-col">
                        <input onChange={handleUname} type="text" placeholder="User name" className=" bg-transparent p-2 my-2 border border-black rounded w-52" />
                        <input onChange={handlePword} type="Password" placeholder="Password" className=" bg-transparent p-2 my-2 border border-black rounded w-52" />
                        <input type="Password" placeholder="Confirm password" className=" bg-transparent p-2 my-2 border border-black rounded w-52" />
                        <button className="bg-violet-400 border rounded-md w-20 p-2" onClick={addUsers}>Signup</button>
                    </div>

                    <p>Already have an account? <Link className="underline" to={'/'} >Login</Link></p>
                </div>
            </div>
        </>
    )
}
export default SignUp