import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";

export const AuthPage = function ({ setUser }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </div>
  );
};