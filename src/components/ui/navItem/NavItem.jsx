import { useNavigate } from "react-router-dom"




const NavItem = ({listItem}) => {

  const navigate = useNavigate()

  const reduxName = `useSelector(state => state.${listItem.reduxName}.${listItem.reduxName})` 


  return (
    <button className='block'>{listItem.name} {reduxName} </button>
  )
}

export default NavItem