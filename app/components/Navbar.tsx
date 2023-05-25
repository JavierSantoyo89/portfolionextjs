import { Route } from '../models'
import Link from 'next/link'

interface Props {
  pathNames: Route[]
}

function Navbar({ pathNames }: Props) {
  return (
    <nav>
      {pathNames.map((pathName) => (
        <Link key={pathName.path} href={pathName.path}>
          {pathName.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
