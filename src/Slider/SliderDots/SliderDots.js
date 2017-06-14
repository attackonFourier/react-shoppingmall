/**
 * Created by cloud.wong on 2017/6/14.
 */
import React,{Component} from 'react';

export default class SliderDots extends Component{
    constructor(props){
        super(props);
    }

    handlerDots(index){
        let option = index - this.props.nowIndex;
    }
}