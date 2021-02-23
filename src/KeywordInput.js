import {Component} from 'react';
export class KeyWordInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return <form>
        <label>
          Name:
          <input type="text" id="keyword"/>
        </label>
        </form>
    }
}