import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    // loading menu data from local json file and filtering data within same file
    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading]

}

export default useMenu;