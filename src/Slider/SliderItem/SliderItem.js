/**
 * Created by cloud.wong on 2017/6/14.
 */
import React,{Component} from 'react';

export default class SliderItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {count,item} = this.props;
        //let width = 100/count + '%';
        return(
            <li class="slider-item">
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }
}