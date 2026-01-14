import { GoogleOAuthProvider } from "@react-oauth/google"
import "./App.css"
import { AuthProvider } from "./contexts/AuthContext"
import ProtectedRoute from "./components/ProtectedRout"
import Dashboard from "./components/dashboard"

// Substitua pela sua Google Client ID
const GOOGLE_CLIENT_ID = "815966239613-rmc18h1asv405hk42qetehm5aten52qi.apps.googleusercontent.com"

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <div className="App">
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        </div>
      </AuthProvider>
    </GoogleOAuthProvider>
  )
}

export default App
