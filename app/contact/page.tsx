import React from "react"

const page = () => {
  return <div>Contact page
    <form action='#'>
      <input type="text" placeholder="Ingresa tu nombre"/>
      <input type="email" placeholder="Ingresa tu correo" />
      <textarea placeholder="Ingresa el mensaje"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
}

export default page
