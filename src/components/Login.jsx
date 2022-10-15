import { loginUrl } from "../state/spotify";
import "../styles/Login.css";

const Login = () => {
    return (
        <div className="login">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify"
            />
            <a href={loginUrl}>Login with spotify</a>
        </div>
    );
};

export default Login;
