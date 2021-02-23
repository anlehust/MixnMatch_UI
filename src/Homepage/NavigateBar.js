import {Component} from 'react';
import '../StyleSheet/NavigateBar.css';

export default class NavigateBar extends Component{
    render(){
        return(
            <div className='container'>
                <div className='navigate-bar'>
                    <div id = 'home' className = 'navigate-component'>Home</div>
                    <div id = 'job' className = 'navigate-component'>Job</div>
                    <div id = 'exhibition' className = 'navigate-component'>Exhibition</div>
                    <div id = 'course' className = 'navigate-component'>Course</div>
                    <div id = 'ranking' className = 'navigate-component'>Ranking</div>
                </div>
            </div>
        );
    }
}