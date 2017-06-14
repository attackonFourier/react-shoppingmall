/**
 * Created by cloud.wong on 2017/6/14.
 */
import React,{Component} from 'react';
import ProductSlide from './ProductSlide';
import BuouTab from './BuouTab';

class ProductDetail extends Component{
    render(){
        return(
            <div>
                <ProductSlide/>
                <BuouTab/>
            </div>
        )
    }
}

export default ProductDetail