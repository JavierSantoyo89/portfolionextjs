const page = () => {
  return (
    <div className="flex items-center justify-center p-12 flex-col align-middle text-center">
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre completo"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Titulo del correo(ej. Oferta de empleo, etc)"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <textarea
              name="message"
              id="message"
              placeholder="Ingresa tu mensaje, diviertete..."
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
