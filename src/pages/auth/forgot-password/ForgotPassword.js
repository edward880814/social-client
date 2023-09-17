import './ForgotPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-success" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter Password"
            handleChange={() => {}}
          />
        </div>
        <Button label={'SIGNIN'} className="auth-button button" disabled={true} />

        <Link to={'/'}>
          <span className="forgot-password">
            <FaArrowLeft className="arrow-left" />
            Back to Login
          </span>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
