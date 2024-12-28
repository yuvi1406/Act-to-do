function Header(props){
    return(
        <>
          <h1 className="text-4xl font-medium">Hello {props.name}</h1>
           <p>I help you manage your activities :)</p>
        </>
    )
}
export default Header