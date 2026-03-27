import useRouter from "../hooks/useRouter"

function Link({ to, children }){
    const { navigate } = useRouter()

    const handlePath = (event) => {
        event.preventDefault()
        navigate(to)
    }

    return (
        <a href={to} onClick={handlePath}>
            {children}
        </a>
    )
}   


export default Link