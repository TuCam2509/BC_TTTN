import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick";

class  OutStandingDoctor extends Component {

    render() {

        return (
            <div className=' section_share section_outstanding'>
                <div className='section-container'>
                  <div className=' section-header'>
                    <span className='title-section'>Bác sĩ nỏi bật tuần qua</span>
                    <button className='btn-section'>Xem thêm</button>
                  </div>
                  <div className=' section-body'>
            <Slider {...this.props.settings}>
            <div className='section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
            </div>
            <div className=' section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                     </div>
                 </div>
             </div>
            <div className='section-customzie'>
                <div className='customzie-body'>
                    <div className='outder'>
                    <div className='bg-img section_OutStandingDoctor'/>
                    </div>
                    <div className='position text-center'>
                     <div>Tiến sĩ,bác sĩ Nguyễn Văn A</div>
                     <div>Cơ xương khớp</div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)( OutStandingDoctor);
