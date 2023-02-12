import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PortalPage from "./pages/portal/PortalPage";
import PortalSesionPage from "./pages/portal/PortalSesionPage";
import PortalServicePage from "./pages/portal-service/PortalServicePage";
import PromosViewPage from "./pages/promosview/PromosViewPage";
import DetallesPromoPage from "./pages/detallespromo/DetallesPromoPage";
import PromosRopaPage from "./pages/promosropa/PromosRopaPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portal-restaurantes" element={<PortalPage />} />
      <Route path="/portal-inicio-sesion" element={<PortalSesionPage />} />
      <Route path="/portal-empresa" element={<PortalServicePage />} />
      <Route path="/promos" element={<PromosViewPage />} />
      <Route path="/detalle-promo" element={<DetallesPromoPage />} />
      <Route path="/promos-ropa" element={<PromosRopaPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
