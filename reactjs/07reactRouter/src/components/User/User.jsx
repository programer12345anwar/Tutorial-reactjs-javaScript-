 
import { useParams } from "react-router-dom"

const User = () => {
  const {userId} = useParams()
  return (
    <div>
      <h1 className="text-3xl bg-orange-400 text-center text-black p-4">user:{userId}</h1>
    </div>
  )
}

export default User
