import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/UserContext";
import classes from "./Profile.module.css";
import Button from "../ui/Button";

const Profile = () => {
  const router = useRouter();
  const { user, logout } = useUser(); // Add logout here

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = () => {
    // Add this function to handle logout
    logout();
    router.push("/login");
  };

  return user ? (
    <div className={classes.container}>
      <h1>Welcome {user.name} to Diamed!</h1>
      <h2>You do not have registered any testkits 😢!</h2>
      <Button text="Logout" onClick={handleLogout}></Button>
    </div>
  ) : null;
};

export default Profile;
