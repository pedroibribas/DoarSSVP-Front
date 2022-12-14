import { useAuth } from "../../contexts/AuthContext";

export function LogoutButton() {
  const { setUser } = useAuth();

  function handleLogout() {
    localStorage.removeItem('ssvpUser');
    setUser({ ssvpUser: null });
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Sair</button>
  );
};