import { ComponentType } from "react";
import { Navigate } from "react-router";
import { useUser } from "@/context/user";
import { JSX } from "react";

function withProtected<P extends object>(WrappedComponent: ComponentType<P>) {
  return function ProtectedComponent(props: P): JSX.Element {
    const { uid } = useUser();

    if (!uid) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withProtected;
