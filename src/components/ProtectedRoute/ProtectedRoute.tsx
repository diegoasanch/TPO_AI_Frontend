import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth'

export type ProtectedRouteProps = {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuthContext()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
