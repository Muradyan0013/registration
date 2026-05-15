import { useLocation } from "react-router-dom";
import "./profile.css";

export const Profile = () => {
  const location = useLocation();

  const [allUsers = [], currentUser = null] =
    location.state || [];

  return (
    <div className="profile">
{currentUser ? 
      <div className="currentUser">
        <h1>Profile</h1>
        <p>
          Username: {currentUser.userName}
        </p>

        <p>
          Email: {currentUser.email}
        </p>
      </div>
:
<div className="currentUser">
<h1>No user logged in yet</h1>    
</div>   
}

      <div className="allUsers">
        <h1>All Users</h1>

{[...allUsers]
  .sort((a, b) => {
    if (currentUser && a.email === currentUser.email)
      return -1;

    if (currentUser && b.email === currentUser.email)
      return 1;

    return 0;
  })
  .map((user, index) => (
    <div
      key={index}
      className={
        currentUser &&
        currentUser.email === user.email
          ? "userCard activeUser"
          : "userCard"
      }
    >
      <p className="cardUserName">
        UserName: {user.userName}
      </p>

      <p className="cardEmail">
        Email: {user.email}
      </p>
    </div>
  ))}
      </div>

    </div>
  );
};