import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Check out this careers page</p>
        <Outlet/>    
    </div>
  )
}