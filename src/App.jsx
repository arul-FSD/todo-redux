import React from 'react'
import Cards from './component/Cards'
import Create from './component/Create'

function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <Create/>
              <Cards/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App