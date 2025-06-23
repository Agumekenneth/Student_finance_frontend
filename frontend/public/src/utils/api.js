// Centralized API utility for backend requests
const API_BASE = 'http://localhost:3000/api';

// === Auth & User ===

export const register = (email, password, first_name, last_name) =>
  fetch(`${API_BASE}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, first_name, last_name })
  }).then(res => res.json());

export const login = (email, password) =>
  fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(res => res.json());

export const getProfile = (token) =>
  fetch(`${API_BASE}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

// === Budget ===

export const createBudget = (budget, token) =>
  fetch(`${API_BASE}/budgets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(budget)
  }).then(res => res.json());

export const getBudgetsByUserId = (userId, token) =>
  fetch(`${API_BASE}/budgets/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

// === Transactions ===

export const createTransaction = (transaction, token) =>
  fetch(`${API_BASE}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(transaction)
  }).then(res => res.json());

export const getTransactionsByUserId = (userId, token) =>
  fetch(`${API_BASE}/transactions/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

// === Savings ===

export const createSavings = (savings, token) =>
  fetch(`${API_BASE}/savings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(savings)
  }).then(res => res.json());

export const getSavings = (token) =>
  fetch(`${API_BASE}/savings`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

// === Dashboard ===

export const getDashboard = (token) =>
  fetch(`${API_BASE}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());
