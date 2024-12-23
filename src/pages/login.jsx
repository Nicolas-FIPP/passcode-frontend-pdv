import Head from 'next/head';
import styles from '../styles/login.module.css';
import {useState} from 'react';

export default function Login() {

    const[username, setUsername]= useState('');
    const[password, setPassword]= useState('');



    const login = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),  
            });
    
            if (response.ok) {
                console.log("Login bem-sucedido");
                const data = await response.json();
                console.log(data);
            } else {
                console.log("Erro ao fazer login");
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    


    return (
        <>
        
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/>



                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
            </Head>

            <div className={styles.background}>
                <form action="" className={styles.login} onSubmit={(e)=>{e.preventDefault();  login();}}>
                    <h1 className={styles.title}>PDV</h1>
                    <input type="text" placeholder="Login" className={styles.input_login} id="user_login" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input type="password" placeholder="Password" className={styles.input_login} id="user_password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input type="submit" value="Entrar" className={styles.button} />
                </form>
            </div>
        </>
    );
}