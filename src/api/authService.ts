import { IUser, LoginData } from '@/interfaces/user.interface';
import axios, { AxiosError } from 'axios';
import { api } from '@/constants/apicontstants';


const authLogin = async({identifier,password}:LoginData):Promise<IUser>=>{
    try {
        const response = await axios.post<IUser>(`${api.path}/${api.endpoints.login}`,{
            identifier: identifier,
            password: password,
        });

        if (response.status !==200) {
            console.error('Error en las credenciales:', response.data);
            
            throw new Error ('Error en las credenciales')
        }
        
        return response.data;
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 400) {
              console.error('Detalles del error:', axiosError.response.data);
            }
          }
        throw error;
      }
}

export const authCtrl = {
    login:authLogin
} 

// // Request API.
// axios
//   .post('http://localhost:1337/api/auth/local', {
//     identifier: 'user@strapi.io',
//     password: 'strapiPassword',
//   })
//   .then(response => {
//     // Handle success.
//     console.log('Well done!');
//     console.log('User profile', response.data.user);
//     console.log('User token', response.data.jwt);
//   })
//   .catch(error => {
//     // Handle error.
//     console.log('An error occurred:', error.response);
//   });