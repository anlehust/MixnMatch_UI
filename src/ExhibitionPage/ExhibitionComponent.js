import { Component } from "react";
import '../StyleSheet/ExhibitionPage.css'

export default class ExhibitionComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className = 'exhibition-component'>
            <img className = 'img-exhibition-component' src={this.props.data.imgSrc} alt = 'anh bai viet'/>
            <div className = 'name-exhibition-component'>{this.props.data.nameExhibition}</div>
            <div className = 'detail-info'>
                <img className = 'author-img' src = {this.props.data.authorImg} alt = 'anh tac gia'/>
                <div className = 'author-name'>{this.props.data.authorName}</div>
                <div className = 'cost'>{this.props.data.cost}</div>
                <button className = 'btn-buy'>Buy</button>
            </div>
        </div>
        );
    }
}