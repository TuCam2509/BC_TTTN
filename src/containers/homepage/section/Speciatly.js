
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Speciatly.scss';
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick";
import dalieu from '../../../assets/speciatly/dalieu.jpg'
import thankinh from '../../../assets/speciatly/thankinh.jpg'
import mat from '../../../assets/speciatly/mat.jpg'




class  Speciatly extends Component {
    render() {
        return (
             <div className=' section_share section_spec'>
                <div className='section-container'>
                  <div className=' section-header'>
                    <span className='title-section'><FormattedMessage id="specialty.popular specialty"/></span>
                    <button className='btn-section'><FormattedMessage id="specialty.send"/></button>
                  </div>
                  <div className=' section-body'>
            <Slider {...this.props.settings}>
                   <div className=' section-customzie'>
                    <div className='bg-img section_spec'/>
                     <div>Cơ xương khớp 1</div>
                   </div>
                   <div className=' section-customzie'>
                     {/*<div className='bg-img section_spec'/>*/}
                     <img src={dalieu} width={278} height={150}/>
                     <div>Cơ xương khớp 2</div>
                   </div>
                   <div className=' section-customzie'>
                       {/*<div className='bg-img section_spec'/>*/}
                       <img src={mat} width={278} height={150}/>
                     <div>Cơ xương khớp 3</div>
                   </div>
                    <div className=' section-customzie'>
                      {/*<div className='bg-img section_spec'/>*/}
                      <img src={thankinh} width={278} height={150}/>
                     <div>Cơ xương khớp 4</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_spec'/>
                     <div>Cơ xương khớp 5</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_spec'/>
                     <div>Cơ xương khớp </div>
                   </div>
            </Slider>

                  </div>
                </div>

             </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)( Speciatly);
