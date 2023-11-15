import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Updated import statements
import About from "./components/about/About";
// import CourseHome from "./components/services/CourseHome";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import ProjectCard from "./components/services/Cards/ProjectCard";
import CourseHome from "./components/services/Cards/CourseHome";
import ClientsCard from "./components/services/Cards/ClientsCard";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch> 
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/about' render={() => <About />} />
          {/* <Route exact path='/courses' render={() => <CourseHome />} /> */}
          <Route exact path='/team' render={() => <Team />} />
          <Route exact path='/services' render={() => <Services />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/ProjectCard' render={() => <ProjectCard/>}/>
          <Route exact path='/CourseHome' render={() => <CourseHome/>}/>
          <Route exact path='/ClientsCard' render={() => <ClientsCard/>}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;