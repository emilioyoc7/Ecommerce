import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }


  return (
    <section className='filters'>

      <div className='box'>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='987'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>

  )
}
