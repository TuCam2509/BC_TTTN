import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../../store/actions'
import {faEdit,faTrash,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import './TableManageUser.scss';


class TableManageUser extends Component {
    constructor(props){
        super(props)
        this.state={
           usersRedux:[]
        }
    }
    componentDidMount(){
     this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                usersRedux:this.props.listUsers
            })
        }

    }
    handleDeleteUser=(user)=>{
        this.props.deleteNewUserRedux(user.id)

    }
    handleUpdateUser=(user)=>{
         this.props.handleEditUserProps(user)
        
    }

    render() {
        console.log("check props list user",this.props.listUsers)
        console.log("check state",this.state.usersRedux)
        let arrUsers=this.state.usersRedux
        return (
                <table id="TableManageUser">
            <tbody>
                <tr>
                 <th>Email</th>
                 <th>FristName</th>
                 <th>LastName</th>
                 <th>Address</th>
                 <th>Actions</th>
              </tr>
              {arrUsers && arrUsers.length>0 && arrUsers.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>
                            <button onClick={()=>this.handleUpdateUser(item)} className='btn-edit' >
                            <FontAwesomeIcon icon={faEdit}/>
                            </button>
                            <button onClick={()=>this.handleDeleteUser(item)} className='btn-delete'>
                            <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </td>
                    </tr> 
                )
              })}
                
                    </tbody>
         </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers:state.admin.users

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux:() =>dispatch(actions.fetchAllUserStart()),
        deleteNewUserRedux:(id) =>dispatch(actions.deleteNewUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
