import { Component } from "react";
import './App.css';
export class UrlInput extends Component{
    render(){
        return <div class = 'flexbox'>
        <form>
        <label>
          Url:
          <input type="text" id="url"/>
        </label>
        </form>
        <form>
        <label>
          Slug:
          <input type="text" id="slug"/>
        </label>
        </form>
        </div>
    }
}

