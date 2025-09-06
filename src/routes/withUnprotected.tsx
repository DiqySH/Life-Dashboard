import { ComponentType, useEffect } from "react";
import { useUser } from "@/context/user";
import { useNavigate } from "react-router";

function withUnprotected<P extends object>(WrappedComponent: ComponentType<P>) {
  return (props: P) => {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
      if (user.uid) {
        navigate("/", { replace: true });
      }
    }, [user.uid, navigate]);

    if (user.uid) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withUnprotected;
