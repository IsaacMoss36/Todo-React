import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Hero = ({ handleLogout }) => {
    
    return(
        <section className="hero">
            <nav>
            <h2>Welcome</h2>
            <button className='logout' onClick={handleLogout}>Logout</button>
            
            </nav>
            <div className='todo-app'>
                <TodoList />
            </div>
            
        </section>
    );
};

export default Hero;