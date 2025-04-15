const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// lib/api.ts
export const registerUser = async (userData: { name: string; email: string; password: string; role: 'guest' | 'owner' }) => {
    const response = await fetch(`http://localhost:5000/api/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }
  
    return response.json();
  };
  
  

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const searchHotels = async (params: {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
}) => {
  const query = new URLSearchParams(params as any).toString();
  const response = await fetch(`${API_BASE_URL}/hotels/search?${query}`);
  return response.json();
};
