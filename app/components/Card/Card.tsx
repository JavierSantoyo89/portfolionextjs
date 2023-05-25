import Image from 'next/image'
import './Card.css'

interface CarData {
  name: string
  type?: string
  created: string
  image?: string
}

interface Props {
  data: CarData
}

function Card({ data }: Props) {
  let formattedType = data.type
  formattedType ||= 'no type'
  return (
    <div className="Card">
      <p> Name: {data.name}</p>
      <p> type: {formattedType}</p>
      <p> Creater: {data.created}</p>
      {!!data.image && (
        <Image src={data.image} width={100} height={100} alt="character" />
      )}
    </div>
  )
}

export default Card
