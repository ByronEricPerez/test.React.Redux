import axios from "axios";

const users = async () => {
    const peticion = await axios.get('https://dummyjson.com/users')
    console.log(peticion.data.users)
}
export {
    users
}