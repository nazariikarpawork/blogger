import './App.scss';
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Blogs from "./components/blogs/blogs";
import Footer from "./components/footer/footer";

function App() {



    const items = [{value: "Home"}, {value: "About Us"}, {value: "Office"}];

    const logo = "Blogger"

    return (
        <div className='App'>
            <Header items={items} logo={logo}/>
            <Intro/>
            <Blogs/>
            <Footer items={items} logo={logo}/>
        </div>
    );
}

export default App;
