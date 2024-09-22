import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    console.log('URL', `${BASE_API}/auth/login`);
    console.log('BODY', JSON.stringify({email, password}));

    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    console.log('URL', `${BASE_API}/user`);
    console.log('BODY', JSON.stringify({name, email, password}));

    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
  getBarbers: async () => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${BASE_API}/barbers?token=${token}`);
    const json = await req.json();
    return json;
  }
};
