import { Filters } from './Filters.jsx'
import "./Header.css"



export function Header () {
  return (
    <header>
      <h1 className='text-principal'>Supermercado</h1>
      <Filters />
    </header>
  )
}
