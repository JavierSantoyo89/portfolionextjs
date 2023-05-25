import { Social } from '../../models'
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub
} from '@tabler/icons-react'
import Link from 'next/link'

interface Props {
  pathNames: Social[]
}
// *? Footer, donde aplicaras los links de referencia y tecto de iformacion general

function footer({ pathNames }: Props) {
  return (
    <>
           {pathNames.map((pathname) =>
        pathname.name === 'Twitter' ? (
          <Link key={pathname.path} href={pathname.path}>
            <IconBrandTwitter />
            {pathname.name}
          </Link>
        ) : pathname.name === 'LinkedIn' ? (
          <Link key={pathname.path} href={pathname.path}>
            <IconBrandLinkedin />
            {pathname.name}
          </Link>
        ) : pathname.name === 'Github' ? (
          <Link key={pathname.path} href={pathname.path}>
            <IconBrandGithub />
            {pathname.name}
          </Link>
        ) : (
          <Link key={pathname.path} href={pathname.path}>
            <IconBrandGithub />
            {pathname.name}
          </Link>
        )
      )}

      {/* {pathNames.map((patname) => (
        <Link key={patname.path} href={patname.path}>
          {patname.name}
        </Link>
      ))} */}

      {/* <Link href={Socials.TWITTER.path}>
      //   {Socials.TWITTER.icon},
      //   {Socials.TWITTER.name}
      // </Link>
      // <Link href={Socials.LINKEDIN.path}>
      //   <IconBrandLinkedin />
      // </Link>
      // <Link href={Socials.GITHUB.path}>
      //   <IconBrandGithub /
      // </Link> */}
    </>
  )
}

export default footer
