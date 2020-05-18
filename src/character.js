import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar'

import Home from './Home'
import Characters from './Characters'
import Places from './Places'
import Items from './Items'
import Hazards from './Hazards'
import Encounters from './Encounters'
import Lists from './Lists'

function getPage(title) {
  switch (title) {
    case Home.Title:
      return <Home/>
    case Characters.Title:
      return <Characters/>
    case Places.Title:
      return <Places/>
    case Items.Title:
      return <Items/>
    case Hazards.Title:
      return <Hazards/>
    case Encounters.Title:
      return <Encounters/>
    case Lists.Title:
      return <Lists/>
    default:
      return <Home/>
  }
}

const AppContainer = () => {
  const [title, setTitle] = useState(location.hash.substr(2) || 'Home')

  useEffect(() => {
    const trackHashChange = () => {
      console.log('The hash has changed!', location.hash)
      setTitle(location.hash.substr(2))
    }

    window.addEventListener('hashchange', trackHashChange, false)

    return () => {
      window.removeEventListener('hashchange', trackHashChange)
    }
  })

  let page = getPage(title)

  return <>
    <AppBar title={ title } />
    { page }
  </>;
}

ReactDOM.render(<AppContainer />, document.querySelector("#root"))
