import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Link = ({ children, href }) => {
  const router = useRouter()
  const child = React.Children.only(children)

  /**
   * Check if endpoint matches one of the matchRoutes prop
   */
  const checkRoutes = () =>
    href
      // remove whitespace
      .replace(/\s/g, '')
      // make array
      .split(',')
      // check if at least one element from  the array matches
      .some((route) => route === `/${router.pathname.split('/')[1]}`)

  let className = child.props.className || ''
  if (checkRoutes()) className = `${className} active`.trim()

  return (
    <NextLink href={href.trim().split(',')[0]}>
      {React.cloneElement(child, { className })}
    </NextLink>
  )
}

export default Link
