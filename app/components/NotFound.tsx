import Image from 'next/image'
function notFound() {
  return (
    <div>
      <p>not-found the component animal</p>
      <Image
        src="../../public/346665075_981163412890339_1070737994307313137_n.jpg"
        alt="Ni idea"
        width={200}
        height={200}
      />
    </div>
  )
}

export default notFound
