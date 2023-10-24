import React from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color';
import logo from '../../assets/images/324413700_692593972405375_5539211946436469645_n.jpg'
import logo1 from '../../assets/images/357436842_1789928924781652_6146713397117138419_n.jpg'
import { connect } from 'react-redux';


class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            // this.props.history.push('/todo')
        }, 3000)
    }
    handleDeleteUser = (user) => {
        console.log(">> check user delete", user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log(">>>check props  : ", this.props.dataRedux)
        let ListUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from homepage
                </div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {/* <img src={logo1} style={{ height: 300, width: 240 }} /> */}
                    {ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button >
                </div >
            </>
        )
    }
}

//export default withRouter(Home);
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'REATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));