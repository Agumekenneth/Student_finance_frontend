import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';

export default function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setSnackbar({ open: true, message: 'Login successful!' });
        navigate('/dashboard');
      } else {
        setSnackbar({ open: true, message: 'Login failed. Please check your credentials.' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Login failed' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          minWidth: 360,
          p: 4,
          borderRadius: 3,
          boxShadow: 10,
          backgroundColor: 'white',
        }}
      >
        <CardContent>
          <Stack spacing={3}>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 800, color: '#1976d2' }}
            >
              Student Finance Tracker Login
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, fontWeight: 700 }}
              >
                Login
              </Button>

              <Button
                type="button"
                variant="text"
                fullWidth
                sx={{ mt: 1, fontWeight: 600 }}
                onClick={() => navigate('/register')}
              >
                Don't have an account? Register
              </Button>
            </form>
          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
}
