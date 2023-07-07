import { useEffect, useState } from 'react'

// from https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component

const useImage = (fileName: string) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`./assets/${fileName}`) 
                setImage(response.default)
            } catch (err) {
                // setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage;
