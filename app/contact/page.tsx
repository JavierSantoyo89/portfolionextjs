const page = () => {
  return (
    <main className=" relative flex flex-col w-screen h-screen  bg-center bg-no-repeat bg-cover justify-center items-center bg-dia dark:bg-night ">
      
      <div className=" absolute cardGlass w-1/3 ">
        {/* w-full max-w-[550px]  */}
        <form
          className=" text-center p-4 h-fit"
          action="https://formsubmit.co/25db5d09266f49d6dc26e597beb9c819"
          method="POST"
        >
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
            <textarea
              name="comments"
              id="comments"
              placeholder="Ingresa tu mensaje, diviertete..."
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Enviar
            </button>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://javiersantoyo.dev"
          ></input>
          <input
            type="hidden"
            name="_subject"
            value="Javier, posible empleo desee tu web!"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </main>
  )
}

export default page
