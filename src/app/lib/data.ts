import {
  User,
  Categoria,
  Juegosvista,
  Juego,
  Plataforma
} from './definitions';
import conn from '@/app/lib/db';

export async function fetchCategoria() {
  try {
    const data = await conn.query<Categoria>('SELECT * FROM categorias ORDER BY trending DESC');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categoria data.');
  }
}

export async function fetchPlataforma() {
  try {
    const data = await conn.query<Plataforma>('SELECT * FROM plataformas');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch plataforma data.');
  }
}

export async function fetchJuego() {
  try {
    const data = await conn.query<Juego>('SELECT * FROM juegos ORDER BY trending DESC');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch juego data.');
  }
}

export async function fetchJuegosVista() {
  try {
    const data = await conn.query<Juegosvista>('SELECT * FROM juegosvista');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch juegosvista data.');
  }
}


export async function fetchUsuario() {
  try {
    const data = await conn.query<User>('SELECT * FROM users');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users data.');
  }
}






export async function getUser(email: string) {
  try {
    const user = await conn.query<User>('SELECT * FROM users WHERE email=' + { email });
    // console.log('SELECT * FROM users WHERE email=' + { email })
    // console.log(user.rows[0] as User)
    return user.rows[0];
  }
  catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }

}
