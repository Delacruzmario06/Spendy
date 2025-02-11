import React, { useState } from 'react'
import styled from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function SignIn({active, setActive}) {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        username: '',
        password: '',
    })

    const { username, password} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username, password)
    
        setInputState({
            username: '',
            password: '',
        })
        setActive(1)
    }

    return (
        <Container>
            <FormStyled onSubmit={handleSubmit}>
                <Header>
                    <h1>Spendy</h1>
                    <h2>Sign in</h2>
                </Header>
                {error && <p className='error'>{error}</p>}
                <div className="input-control">
                    <input 
                        type="text" 
                        value={username} 
                        name={'username'} 
                        placeholder="Username"
                        onChange={handleInput('username')}
                    />
                </div>
                <div className="input-control">
                    <input value={password}  
                        type="password" 
                        name={'password'}  
                        placeholder={'Password'}
                        onChange={handleInput('password')} 
                    />
                </div>
                <div className="submit-btn">
                    <Button 
                        name={'SignIn'}
                        icon={plus}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-accent)'}
                        color={'#fff'}
                    />
                </div>
                <div>
                    <p>Don't have an account? <SignUpLink role={'link'} onClick={() => setActive(6)}>Sign up</SignUpLink></p>
                </div>
            </FormStyled>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Full height of the viewport */
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 400px; /* Optional: to limit the form's width */
    padding: 2rem;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        background: #e0f7fa; /* Lighter, more prominent background color */
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 2rem; /* Spacing between header and form fields */
    
    h1 {
        font-size: 3rem;
        color: #333;
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
        color: #555;
        margin: 0;
    }
`;

const SignUpLink = styled.a`
    color: #007bff; /* Blue color */
    font-weight: bold; /* Bold style */
    text-decoration: none;
    
    &:hover {
        text-decoration: underline; /* Underline effect on hover */
    }

    &:focus {
        outline: none;
    }
`;

export default SignIn;
