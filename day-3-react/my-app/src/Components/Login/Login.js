import React, { useEffect, useState, useReducer } from 'react';
import styles from './Login.module.css';

const emailReducer = (state, action) => {
        if(action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.includes('@') };
        }
        if(action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.includes('@') };
        }
        return {value: '', isValid: false};
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if(action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return {value: '', isValid: false};
}

function LoginPage(props) {
    
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false
    });


    useEffect(() => {
        console.log("inside the useEffect of email and password")
        const identifier = setTimeout(() => {
            setIsFormValid(emailState.isValid && password.trim().length > 6);
        }, 500);
        return () => {
            console.log("clearTimeout");
            clearTimeout(identifier);
        }
    }, [email, password]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
        console.log("valid form", isFormValid);
        
        setIsFormValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });

    };
 
    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });     
        setIsFormValid(passwordState.isValid && event.target.value.trim().length > 6);
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };
    
    const handleSubmit = (e) => {   
        e.preventDefault(); 
        console.log('Email:', emailState.value, 'Password:', emailState.value);
        props.onHandleLogin(emailState.value, passwordState.value);
    };

    return (
        <div className={styles.container}>
            {!isFormValid && <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
                 <input
                    type="email"
                    placeholder="Email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>
            }
        </div>
    );
}

export default LoginPage;
