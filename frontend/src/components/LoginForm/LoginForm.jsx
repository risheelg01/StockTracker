import s from './style.module.css'

export function LoginForm() {
    return (
        <form className={s.root}>
            <input className={s.form_field} type="text" placeholder='Phone Number' />
            <input className={s.form_field} type="password" placeholder='Password' />
            <div className={s.links_container}>
                <div className={s.links}>Create Account</div>
                <div className={s.links}>Forgot Password?</div>
            </div>

            <button className={s.btn}>Sign In</button>
        </form>
    )
}