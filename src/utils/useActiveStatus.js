import { useEffect, useState } from "react";

const useActiveStatus = () => {
  const [userOnlineStatus, setUserOnlineStatus] = useState(true);
  useEffect(() => {
    // check the user is online or not
    window.addEventListener("online", () => {
      setUserOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setUserOnlineStatus(false);
    });
  }, []);
  return userOnlineStatus; // boolean value
};
export default useActiveStatus;
