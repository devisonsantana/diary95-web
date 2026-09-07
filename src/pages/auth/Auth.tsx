import { Button, Input, Window1 } from "@/components/ui/";
import { Loading } from "@/components/layouts/";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Auth.module.css";

function Auth() {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.username.trim()) {
      nextErrors.username = "Preencha o usuário.";
    }
    if (!values.password) {
      nextErrors.password = "Preencha a senha.";
    } else if (values.password.length < 6) {
      nextErrors.password = "Mínimo de 6 caracteres.";
    }
    if (mode === "register" && values.password !== values.confirmPassword) {
      nextErrors.confirmPassword = "As senhas não coincidem.";
    }
    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues({ ...values, [field]: value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    new Promise(() => {
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard", { replace: true });
      }, 5000);
    });
  };

  function switchMode(nextMode: Mode) {
    setMode(nextMode);
    setValues(initialValues);
    setErrors({});
  }

  return (
    <div className={styles.page}>
      <div className={styles.tabs}>
        <Button
          onClick={() => switchMode("login")}
          className={`${styles.btn} ${mode === "login" ? styles.btnActive : ""}`}
        >
          LOGIN
        </Button>
        <Button
          onClick={() => switchMode("register")}
          className={`${styles.btn} ${mode === "register" ? styles.btnActive : ""}`}
        >
          REGISTER
        </Button>
      </div>

      <Window1 title="auth@diary:-$">
        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="> usuario"
            type="text"
            placeholder="root"
            value={values.username}
            error={errors.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <Input
            label="> senha"
            type="password"
            placeholder="********"
            value={values.password}
            error={errors.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          {mode === "register" && (
            <Input
              label="> confirmar senha"
              type="password"
              placeholder="********"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          )}
          <Button type="submit" className={styles.btn}>
            {mode === "login" ? "ENTRAR" : "CRIAR"}
          </Button>
        </form>
      </Window1>

      {loading && (
        <Window1 title="Loading...">
          <Loading />
        </Window1>
      )}
    </div>
  );
}

export default Auth;

type Mode = "login" | "register";

type FormValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

const initialValues: FormValues = {
  username: "",
  password: "",
  confirmPassword: "",
};
