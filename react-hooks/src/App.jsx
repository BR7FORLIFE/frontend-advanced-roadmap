import Router from "./RouterPovider"
import Link from "./components/Link";
import Route from './components/route'

import {Home, Search} from './components/pagesRoutes'

export function App(){
  
  return (
    <Router>
      <Link to='/home'>HOME</Link> 
      <Route path='/home' component={Home} />
    </Router>
  )
}


export default App