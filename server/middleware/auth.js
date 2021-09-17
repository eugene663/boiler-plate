
const { User } = require('../models/User');

let auth = (req, res, next) => {
    //인증 처리를 하는곳 
    //클라이언트 쿠키에서 토큰을 가져온다.

    let token = req.cookies.x_auth;
    // 토큰을 복호화 한후  유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })

        
        req.token = token; //index.js에서 사용하려고
        req.user = user;
        next(); // middleware을 하고 계속 갈 수 있게.
    })


    // 유저가 있으면 인증 Okay

    // 유저가 없으면 인증 No!
}

module.exports = { auth };