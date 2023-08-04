import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login () {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || "/";
    const onFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user, () => navigate(fromPage, {replace: true}));
    };

    return (
        <div className="login_form__wrapper">
            <form onSubmit={onFormSubmit}>
                <label>
                    Username : <input name="username"/>
                </label>
                <button type="submit">Login</button>

            </form>
        </div>
    )
};


export default Login