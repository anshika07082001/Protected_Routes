import { useContext } from 'react'
import UserContext from '../context/UserContext'

const useContextHook = () => {
 const context = useContext(UserContext)
 return context
}

export default useContextHook