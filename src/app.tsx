// @refresh reload
import { Router, Routes } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "./components/nav";

export default function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div class="news-list-nav">Loading...</div>}>
        <Routes>
          <FileRoutes />
        </Routes>
      </Suspense>
    </Router>
  );
}
