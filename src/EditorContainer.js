
import './App.css';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// import {convertToRaw, EditorState} from 'draft-js';


export class EditorContainer extends Component{
    constructor(props){
        super(props);
        this.state = { text: '' }
        this.handleChange = this.handleChange.bind(this);
        
    }
//   onEditorStateChange= (editorState)=>{
//       this.setState({
//           editorState,
//       })
//   }
 
  check = () =>{
      const{editorState} = this.state;
      const content = editorState.getCurrentContent().getPlainText();
      const keyword = document.getElementById('keyword').value;
      debugger
  }
  handleChange(value) {
    this.setState({ text: value })
  }
  render(){
    var modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],             // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']               
        ],
      }
    
     
    return (
        <div className="App">
        <ReactQuill className="editor" theme="snow"
                    modules={modules}>
        </ReactQuill>
      
        <button onClick={this.check}>Check</button>
    </div>
  );
}}

