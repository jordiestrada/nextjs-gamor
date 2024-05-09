// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Categoria = {
  id: string;
  categoria: string;
  trending: number;
  image: string;
};

export type Juego = {
  id: string;
  juego: string;
  trending: number;
  image: string;
};

export type Plataforma = {
  id: string;
  plataforma: string;
};

export type Juegosvista = {
  id: string;
  juego: string;
  categoria_id: string;
  plataforma_id: string;
  categoria: string;
  plataforma: string;
};

