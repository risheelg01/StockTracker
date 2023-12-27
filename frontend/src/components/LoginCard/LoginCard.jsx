import { LoginForm } from '../LoginForm/LoginForm'
import { LoginHeader } from '../LoginHeader/LoginHeader'
import s from './style.module.css'

export function LoginCard() {
    return (
        <div className={s.root}>
            <LoginHeader />
            <LoginForm />
        </div>
    )
}