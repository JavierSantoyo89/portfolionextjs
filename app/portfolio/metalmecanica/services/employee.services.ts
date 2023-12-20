import { data } from "autoprefixer";
import { allEmployee } from "../models/index";

export const getAllEmployee = (): Promise<allEmployee[]> => {
  const url ="backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall";
  
  return fetch(url)
  .then(
    (response) => response.json()
    )
    .then((data) => data.results)
    
    .catch((error) => {
      console.log("Feching error");
    })
    
};
