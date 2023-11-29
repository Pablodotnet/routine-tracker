import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TrackerRoutes } from "../tracker/routes/TrackerRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            {/* Login and register */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            {/* Tracker app */}
            <Route path="/*" element={<TrackerRoutes />} />
        </Routes>
    )
}
