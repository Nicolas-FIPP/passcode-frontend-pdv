// src/app/page.tsx
"use client"
import { usePathname } from "next/navigation";  // Importando o usePathname para obter o caminho atual
import { routes } from "./routes/routes";
import React, { useEffect, useState } from "react";

export default function Page() {
  const pathname = usePathname();  // Obtendo o pathname atual
  const [currentPage, setCurrentPage] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Encontrando a rota correspondente ao pathname
    const currentRoute = routes.find((route) => route.path === pathname);

    if (currentRoute) {
      setCurrentPage(
        React.isValidElement(currentRoute.component) ? currentRoute.component : <div>Página não encontrada</div>
      );
    } else {
      setCurrentPage(<div>Página não encontrada</div>);  // Página de erro
    }
  }, [pathname]);  // Recalcular sempre que o pathname mudar

  return (
    <div>
      {currentPage}
    </div>
  );
}
