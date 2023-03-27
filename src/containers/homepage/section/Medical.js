import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Medical.scss';
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick";

class  Medical extends Component {

    render() {

        return (
            <div className=' section_share section_medical'>
                <div className='section-container'>
                  <div className=' section-header'>
                    <span className='title-section'>Cơ sở y tế nổi bật</span>
                    <button className='btn-section'>Xem thêm</button>
                  </div>
                  <div className=' section-body'>
            <Slider {...this.props.settings}>
                   <div className=' section-customzie'>
                    <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 1</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 2</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 3</div>
                   </div>
                    <div className=' section-customzie'>
                      <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 4</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 5</div>
                   </div>
                   <div className=' section-customzie'>
                     <div className='bg-img section_medical'/>
                     <div>Bệnh viện Hữu nghị Việt đức 6 </div>
                   </div>
            </Slider>

                  </div>
                </div>

             </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)( Medical);
