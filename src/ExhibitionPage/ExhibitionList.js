import { Component } from "react";
import ExhibitionComponent from "./ExhibitionComponent";
import '../StyleSheet/ExhibitionPage.css'
import {scrollNext, scrollPrevious} from '../JavaScript/base';
import {RightOutlined, LeftOutlined} from '@ant-design/icons';

export default class ExhibitionList extends Component{
    render(){
        var list = this.props.exhibitionList;
        var imageSrc = this.props.imageSrc;
        imageSrc = 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2020_01_13/20180215vntetamthuc170126h84.jpg';
        list = [{'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 mon an ngay Tet fsafsasadsadd asdsdsascxz sadsa sadsadd sadsadsasa dsdsa', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '1000 coins'}, 
        {'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 thuc an co loi', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '2000 coins'},
        {'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 thuc an co loi', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '2000 coins'},
        {'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 thuc an co loi', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '2000 coins'},
        {'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 thuc an co loi', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '2000 coins'},
        {'imgSrc':'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mam-co-ngay-tet-truyen-thong-Viet-Nam.png', 'nameExhibition':'Top 10 thuc an co loi', 'authorImg': 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/19905383_661262514076048_6630453395979967795_n.jpg?_nc_cat=109&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Wl97NqDcx-8AX_3rNfY&_nc_ht=scontent.fhan5-1.fna&oh=4d62c491d27cf3d5471837078941da3c&oe=604738E0', 'authorName': 'anlx', 'cost': '2000 coins'}]
        return (
            <div className='container-exhibition-list'>
                <img alt='anh trien lam' src = {imageSrc} className = 'imageSrc'/>
                <LeftOutlined id = 'scroll-pre' onClick={scrollPrevious}/>
                <div className = 'exhibition-list'>
                    {list.map((exhibitionComponent)=><ExhibitionComponent data = {exhibitionComponent}></ExhibitionComponent>)}
                </div>
                <RightOutlined id = 'scroll-next' onClick={scrollNext} disabled/>
            </div>
        );
    }
}