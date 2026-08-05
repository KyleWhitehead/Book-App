import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Auth({isOpen, onClose}) {
  const navigate = useNavigate();
  if (!isOpen) {
    return null;
  }

  return (
    <div className="auth__wrapper">
        <div className="auth">
            <div className="auth__content">
                <div className="auth__title">Login to Summarist</div>
                <button
                    type="button"
                    className="btn guest__btn--wrapper"
                    onClick={() => {
                        onClose?.();
                        navigate('/for-you');
                    }}
                >
                    <figure className="guest__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </figure>
                    <div>Login as Guest</div>
                </button>
                    <div className="auth__seperator">
                        <div className="auth__seperator--text">or</div>
                    </div>
                    <button className="btn google__btn--wrapper">
                        <figure className="google__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-google"><path d="M21.35 11.1h-9.17v2.92h5.44c-.23 1.27-1.64 3.72-5.44 3.72-3.27 0-5.95-2.7-5.95-6s2.68-6 5.95-6c1.86 0 3.11.79 3.82 1.47l2.6-2.51C17.8 2.98 15.54 2 12.18 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.77 0-.66-.07-1.17-.15-1.73z"></path></svg>
                            </figure>
                            <div>Login with Google</div>
                    </button>
                    <div className="auth__seperator--text">or</div>
                    <form className="auth__main--form">
                        <input placeholder="Email"></input>
                        <input placeholder="Password" type="password"></input>
                    </form>
            </div>
            <div className="auth__forgot--password">Forgot your password?</div>
            <button className="auth__switch--btn">Don't have an account?</button>
            <div className="auth__close--btn"
                 onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
        </div>
      
    </div>
  );
}

  export default Auth;