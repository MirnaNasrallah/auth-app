import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Should match your backend

const Application: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err: any) {
        setError('Unauthorized. Please sign in again.');
        localStorage.removeItem('token');
        setTimeout(() => navigate('/signin'), 1500);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  if (loading) return <Box textAlign="center" mt={8}><CircularProgress /></Box>;
  if (error) return <Box textAlign="center" mt={8}><Alert severity="error">{error}</Alert></Box>;

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={3} boxShadow={3} borderRadius={2} textAlign="center">
      <Typography variant="h5" mb={2}>
        Welcome{profile?.name ? `, ${profile.name}` : ''} to the application.
      </Typography>
      <Button variant="outlined" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
        Logout
      </Button>
    </Box>
  );
};

export default Application; 