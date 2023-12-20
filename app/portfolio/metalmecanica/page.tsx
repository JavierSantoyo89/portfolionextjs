import React from "react";
import Link from "next/link";
import { getAllEmployee } from "./services/index";

async function fetchAllEmployees() {
  return await getAllEmployee();
}
console.log(getAllEmployee());
// console.log(fetchAllEmployees());

async function page() {
  const Employee = await fetchAllEmployees();

  return (
    <div>
      hola
      <p>
        De momento esta en desarrollo el are de frontend pero puede ver el
        backend{" "}
        <Link
          href="https://backendportfolio-r0uf.onrender.com/"
          aria-label="Enlace al backend"
        >aqui</Link>
      </p>
    </div>
  );
}

export default page;
