require('dotenv').config();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy: KakaoStrategy } = require('passport-kakao');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20')
const bcrypt = require('bcrypt');

const { user } = require('../models');

module.exports = () => {
    // Local Strategy
    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },async (email, password, done) => {
        try {
            const userInfo = await user.findOne({ where: { email: email } });
            if( !userInfo ) {
                done(null, false, { message: '이메일을 잘못 입력하셨습니다.'})
            }
            const isValidPW = await bcrypt.compare(password, userInfo.dataValues.password);

            if( isValidPW ) {
                done(null, userInfo);
            } else {
            done(null, false, { message: '비밀번호를 잘못 입력하셨습니다.'});
            }
        } catch(error) {
            console.error(error);
            done(error);
        }
    }));

    // JWT Strategy
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.ACCESS_SECRET
    }, async (jwtPayload, done) => {
        try{
            const userInfo = await user.findOne({ where: { id: jwtPayload } });
            if( userInfo ) {
                done(null, userInfo);
            }
            done(null, false, { message: '인증정보가 올바르지 않습니다.'})
        } catch(error) {
            console.error(error);
            done(error);
        }
    }))

    // Kakao Strategy
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/oauth/kakao/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile)
        console.log( typeof profile.id)
        try {
            const exUser = await user.findOne({
                where: { kakaoId: profile.id, provider: 'kakao' }
            });
            if(exUser) {
                done(null, exUser);
            } else {
                const newUser = await user.create({
                    email: profile._json && profile._json.kakao_account.email,
                    name: profile.displayName,
                    kakaoId: profile.id,
                    provider: 'kakao'
                });
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error)
        }
    } 
    ))

    // Naver Strategy
    passport.use(new NaverStrategy({
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: '/oauth/naver/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('naver profile', profile)
        try {
            const exUser = await user.findOne({
                where: { naverId: profile.id, provider: 'naver' }
            });
            if(exUser) {
                done(null, exUser);
            } else {
                const newUser = await user.create({
                    email: profile.email,
                    name: profile.name,
                    naverId: profile.id,
                    provider: 'naver'
                });
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error)
        }
    } 
    ))

    // Google Strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/oauth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('google profile', profile)
        try {
            const exUser = await user.findOne({
                where: { googleId: profile.id, provider: 'google' }
            });
            if(exUser) {
                done(null, exUser);
            } else {
                // const googleId = Number(profile.id)
                const newUser = await user.create({
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    googleId: profile.id,
                    provider: 'google'
                });
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error)
        }
    } 
    ))
}