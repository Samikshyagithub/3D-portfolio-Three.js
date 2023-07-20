import { BrowserRouter } from "react-router-dom";//used for routing(it showed error until and unless I introduced <BrowserRouter>.
//now we have to import all the components since whatever change we make over here will be visualized in the actual browser.
//About , Contact and everything else showed error until I closed it down.
//So it is necessary to close everything you open.
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App =() => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        </div>
    <div>
      Hello
    </div>
    </BrowserRouter>
  );
}

export default App;
