import { RouterContext } from "../context/RouterContext"
import { useContext } from "react"

function useRouter(){
    return useContext(RouterContext)
}

export default useRouter