import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">PhiloChat</span>
        <span className="title">로그인</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="이메일" required/>
          <input type="password" placeholder="비밀번호" required />
          <button>Sign in</button>
          {err && <span>에러가 발생했습니다</span>}
        </form>
        <p>계정이 없으신가요? <Link to="/register">가입하기</Link></p>
      </div>
    </div>
  );
};

export default Login;
