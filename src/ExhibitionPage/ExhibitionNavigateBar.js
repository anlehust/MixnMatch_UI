import {Component} from 'react';
import '../StyleSheet/NavigateBar.css'

export default class ExhibitionNavigateBar extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const list = [['food', 'Food'], ['fashion', 'Fashion'], ['technology', 'Technology'], ['cosmetic', 'Cosmetic'], ['sport', 'Sport'], ['game', 'Game']];
        return <div className = 'container' id= 'exhibition-navigate'>
            {
                list.map(item=>
                    <div id={item[0]} className='exhibition-navigate-component navigate-component'>{item[1]}</div>
                )
            }
        </div>
    }
}