// AppRouter.tsx
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Tasks } from "../pages/Tasks";
import { useAuth } from "../hooks/useAuth";
import { Register } from "../pages/Register";
import { ProfileUser } from "../pages/ProfileUser";

export const AppRouter = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/user" element={<ProfileUser />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
};
