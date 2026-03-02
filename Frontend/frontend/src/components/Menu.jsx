import React from 'react'
import {data} from "../restApi.json"

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Laboriosam rem doloribus sunt minus assumenda aliquam dolor voluptatibus voluptates ab hic!
                     </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(Element => {
                        return(
                            <div className="card" key={Element.id}>
                                <img src={Element.image} alt={Element.title} />
                                <h3>{Element.title}</h3>
                                <button>{Element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      
    </section>
  )
}

export default Menu
