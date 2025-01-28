import { Link, useNavigate } from 'react-router'

export default function LinkButton({ children, to }) {
  const navigate = useNavigate()
  if (to === '-1') return <button onClick={() => navigate(-1)}>{children}</button>
  return (
    <Link to={to} className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>
      {children}
    </Link>
  )
}
