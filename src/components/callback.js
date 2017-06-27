import {Component} from 'react';
import { setIdToken, setAccessToken } from '../utils/authService';

class CallbackComponent extends Component{

    componentDidMount(){
        setAccessToken();
        setIdToken();
        window.location.href = "/";

    }

    render(){
        return null;
    }
}

export default CallbackComponent;
