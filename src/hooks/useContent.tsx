import { useEffect, useState } from 'react'
import axios from 'axios'
import { backend_Url } from '../config'

const useContent = () => {
  const [contents, setContents] = useState([])

  const refresh = async () => {
    const res = await axios.get(`${backend_Url}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })

    setContents(res.data.content)
  }

  useEffect(() => {
    refresh()
  }, [])

  return { contents, refresh }
}

export default useContent