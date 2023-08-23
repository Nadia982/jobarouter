import { NavLink, Outlet } from "react";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
