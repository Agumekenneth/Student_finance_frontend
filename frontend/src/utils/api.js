const API_BASE = 'http://localhost:3000/api';

async function handleResponse(res) {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || 'API error');
  }
  return res.json();
}

export const register = (email, password, first_name, last_name) =>
  fetch(`${API_BASE}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, first_name, last_name }),
  }).then(handleResponse);

export const login = (email, password) =>
  fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);

export const getProfile = (token) =>
  fetch(`${API_BASE}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(handleResponse);

// ... rest of your API functions unchanged

