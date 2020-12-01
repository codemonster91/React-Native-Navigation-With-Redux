import { connect } from 'react-redux';
// import { } from '../../redux/actions';
import HomeScreen from './HomeScreen';

function mapStateToProps(state) {
    console.log("getuserDatat--> "+JSON.stringify(state))

    const userData = state.userReducer
    console.log("getuserDatat--> "+JSON.stringify(userData))
    return {
        userData
    }
}

export default connect(mapStateToProps)(HomeScreen)