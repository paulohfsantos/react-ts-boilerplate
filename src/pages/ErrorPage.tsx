import { ReactNode } from 'react'
import { useRouteError } from 'react-router-dom'

type ErrorPageProps = {
  statusCode: number
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { statusCode } = props
  const error = useRouteError() as string | ReactNode

  const status = [ 400, 401, 403, 404, 500 ]
  const statusText = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error'
  }[statusCode]

  if (!status.includes(statusCode)) {
    return (
      <div>
        <p>Unknown error</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{statusCode}</h1>
      <p>{statusText}</p>

      <small>{error}</small>
    </div>
  )
}