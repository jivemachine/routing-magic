import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

const App = () => {
    return (
        <BrowserRouter>
            <main className="container mt-5">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/users/:userid" element={<UserDetails />} />
                            <Route path="*" element={<h1>404 Not Found :(</h1>} />
                        </Routes>
                    </div>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;