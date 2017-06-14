/**
 * Created by cloud.wong on 2017/6/14.
 */
import React,{Component} from 'react';
import SlideItem from './SliderItem/SliderItem';

class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            nowIndex:0,
        };
    }

    slide(index){
        var _index = this.state.nowIndex + index;
        this.setState({
            nowIndex:_index,
        });
    }

    render(){
        let count = this.props.items.length;
        let itemNodes = this.props.item.map((item,index) => {
            return <SlideItem item={item} count = {count} key={'item'+ index}/>;
        });
        return (
            <div className="slider">
                <ul style={{
                    transform: translate3d(-750, 0, 0) translateZ(0),
                    transitionDuration: 0ms,
                    transitionTimingFunction: cubic-bezier(0.165, 0.84, 0.44, 1),
                }}>
                    {itemNodes}
                </ul>
            </div>
        )
    }
}

Slider.options={
    speed:1e3,
    items:[]
};
export default Slider