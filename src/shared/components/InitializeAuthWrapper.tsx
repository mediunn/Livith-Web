import { useInitializeAuth } from "../hooks/useInitializeAuth";

export function InitializeAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useInitializeAuth();
  return <>{children}</>;
}
