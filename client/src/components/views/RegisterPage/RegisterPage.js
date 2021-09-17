import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action'
import {withRouter} from 'react-router-dom';


function RegisterPage(props) {

    const dispatch = useDispatch();

    //타이핑이 안됨
    // props vs state(내부에서 데이터 변화) -> state
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    //타이핑 할 때 onChange 이벤트 발생하여 state 바꿔지고 value 바뀜
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    //버튼 눌렀을 때
    const onSubmitHandler = (event) => {
        //페이지 refresh 막음. refresh 되면 원래 하려는 일 못함.
        event.preventDefault();

        //비밀번호 , 비밀번호 확인 같은지 체크
        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }
        //서버에 보내기
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        //Axios.post('/api/users/register', body) 는 redux 쓰므로 지워줌

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push("/login")
                }else{
                    alert("Failed to sign up")
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

                    <label>Name</label>
                    <input type="text" value={Name} onChange={onNameHandler} />


                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    
                    <label>Confirm Password</label>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                    
                    <br/>
                    <button>
                        회원가입
                    </button>
                </form>
        
        </div>
    )
}

export default withRouter(RegisterPage)
