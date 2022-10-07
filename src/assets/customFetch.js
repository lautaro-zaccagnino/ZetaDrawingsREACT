export const customFetch = (productos) => {
    return (
        new Promise ((resolve, reject) => {
            setTimeout (()=> {
                resolve (productos)
            },2000)
        }
    ))
}