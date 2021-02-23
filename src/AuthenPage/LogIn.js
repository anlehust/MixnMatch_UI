import {Component} from 'react';
import '../StyleSheet/Login.css';
export default class LogInPage extends Component{
    render(){
        return(
        <div id = 'main-container'>
            <div id = 'main'>
                    <p className="text-blue header">MIX AND MATCH</p>
                    <input placeholder = 'Tên đăng nhập hoặc email' id ='username'/>
                    <input placeholder = 'Mật khẩu' type = 'password' id='password'/>
                    <button id = 'login-btn' className='btn'> Đăng nhập </button>
                    <a href = '#'> Quên mật khẩu ?</a>
                    <div id = 'line'></div>
                    <button id='register-btn' className='btn'> Tạo tài khoản mới</button>
            </div>
        </div>
        );
    }
}