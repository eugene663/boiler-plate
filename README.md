# boiler-plate
<br /><br />
## 프로젝트 내용
#### John Ahn의 따라하며 배우는 노드, 리액트 시리즈 - 기본강의(https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8)를 수강하며 진행했다. 기본 시작페이지, 로그인 페이지, 회원가입 페이지로 이루어져있다. 로그인, 로그아웃, 회원가입, 그리고 로그인된 사람은 로그인, 회원가입 페이지에 접근할 수 없는 인증 체크 등의 기능이 있다.
<br />
## 사용된 기술
### Node JS. 백엔드(server)
#### 몽고DB 사용
#### 1) 회원가입 기능
####    Body-parser : Body 데이터를 분석해서 req.body로 출력한다.
####    POST MAN : client 없는 상태에서 request를 보내기 위해 사용한다. POST MAN을 통해 Register Route에 request를 보낸다.
####    NODE MON : 소스를 변경할 때 자동으로 반영하고 서버를 재시작해 준다.
<br />
#### 2) 비밀번호 암호화
####    Bycrpt 이용 : bcrypt사이트를 보며 진행한다. salt를 통해 암호화된 비밀번호를 만든다. 비밀번호를 바꿀 때만 작동하도록 한다.
<br />
#### 3) 로그인
####    login route 생성 -> User.findOne()을 통해 DB에서 요청한 이메일 찾고 같은지 확인 -> Bcrypt를 이용하여 plain 비밀번호와 암호화된 비밀번호가 같은지 확인 -> 이메일과 비밀번호가 모두 같다면 token을 생성하고 cookie에 저장
<br />
#### 4) Auth
####    페이지 이동 시 로그인 여부, 관리자 유저인지 확인한다.
####    cookie에 저장해 둔 token을 server로 부터 가져와서 복호화 -> user id를 얻고 DB에서 유저를 찾고 token과 유저와 비교한다.
####    쿠키와 같다면 Authentication True, 일치하지 않으면 False
<br />
#### 5) 로그아웃
####    로그아웃 route를 만들고 DB에서 유저를 찾아 토큰을 지워준다.
<br />
### React JS. 프론트엔드(client)
#### 1) axios
####    sever에서 client없이 사용했던 POSTMAN을 사용하지 않아도 된다. React JS 부분에서 request를 보낼 수 있다.
<br />
#### 2) CSS Framework
####    Ant Design 사용
<br />
#### 3) Redux
#### JS app들을 위한 state 관리 라이브러리이다. state는 변하는 데이터를 다룰 때 사용한다.
<br />
#### 4) React Hooks
####    functional component 에서도 class 기능을 다 쓸 수 있다.
