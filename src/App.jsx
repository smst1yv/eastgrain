import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/Home'
import Footer from './Layout/Footer/Footer'
import Carrer from './pages/carrer/Carrer'
import About from './pages/about/About'
import News from './pages/news/News'
import Trade from './pages/trade/Trade'
import Logistic from './pages/logistic/Logistic'
import Storage from './pages/storage/Storage'
import Processing from './pages/processing/Processing'
import Integrati from './pages/integration/Integrati'
import Contact from './pages/conta/Contact'
import Blog from './pages/blog/Blog'
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/carrer" component={Carrer} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/service/trade" component={Trade} />
          <Route path="/service/logistic" component={Logistic} />
          <Route path="/service/storage" component={Storage} />
          <Route path="/service/processing" component={Processing} />
          <Route path="/service/integration" component={Integrati} />
          <Route path="/blogdetail/:id" component={Blog} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}



export default App
