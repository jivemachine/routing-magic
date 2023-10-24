import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1 className="text-center">Home Page</h1>
            <Link to="/users" className='btn btn-primary'>
                Go see a list of all users brah
            </Link>
        </>
    );
}

export default Home;