import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"></img>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"></Input>
                <Gap height={18}/>
                <Input label="Email" placeholder="Email"></Input>
                <Gap height={18}/>
                <Input label="Password" placeholder="Password"></Input>
                <Gap height={50}/>
                <Button title="Register"></Button>
                <Gap height={100}/>
                <Link title="Kembali ke Login"></Link>
            </div>
        </div>
    )
}

export default Register;
