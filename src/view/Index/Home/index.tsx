import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import './home.css'
const Home:React.FC = () => {
    return (
        <div className='wrap'>
               <main>

               </main>
               <footer>
                  <NavLink to='/main/home'>首页</NavLink>
               </footer>        
        </div>
    );
};

export default Home;