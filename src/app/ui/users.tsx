import { fetchUsuario } from '../lib/data'


export default async function Usuarios() {
  const usuario = await fetchUsuario();
  const usua = usuario.find((obj) => obj.email === 'user@nextmail.com');
  return (
    
    <div>{usua?.email}
    </div>
  );
}
