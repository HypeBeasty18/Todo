
import { useSelector } from 'react-redux'

import NavItem from '../../ui/navItem/NavItem'


const NavList = () => {

  const todos = useSelector(state => state.todos.todos)


  return (
    <div className='bg-zinc-900 h-screen'>
      <button className='text-left'>
        <NavItem  name={'My Day'} path={'/myday'} numbers={todos.filter(todo => todo.isCompleted !== true).length} />
      </button>
    </div>
  )
}

export default NavList

