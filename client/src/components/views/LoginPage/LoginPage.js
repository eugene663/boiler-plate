import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action'
import {withRouter} from 'react-router-dom';

function LoginPage(props){
    const dispatch = useDispatch();

    //타이핑이 안됨
    // props vs state(내부에서 데이터 변화) -> state
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    //타이핑 할 때 onChange 이벤트 발생하여 state 바꿔지고 value 바뀜
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    //버튼 눌렀을 때
    const onSubmitHandler = (event) => {
        //페이지 refresh 막음. refresh 되면 원래 하려는 일 못함.
        event.preventDefault();

        //서버에 보내기
        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
        
    }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
            }}>
                
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmitHandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <br/>
                    <button>
                        Login
                    </button>
                </form>
        
        </div>
    )
}

export default withRouter(LoginPage)
