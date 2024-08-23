import React, { useState } from 'react';
import { Container, CssBaseline, Typography, Box, Button, TextField } from '@mui/material';

const Track = () => {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');

    const trackOrder = () => {
        // Simulate an API call to get order status
        if (orderId === "12345") {
            setOrderStatus("Your order is on the way!");
        } else {
            setOrderStatus("Order not found. Please check your order ID.");
        }
    };

    return (
        <>
            <CssBaseline />
            <Container fixed maxWidth="md">
                <Box sx={{ textAlign: 'center', marginTop: 10 }}>
                    <Typography variant='h3' sx={{ color: '#1976d2', fontWeight: 'bold' }}>Track</Typography>
                </Box>
                <Box sx={{ marginTop: 5, backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}>
                    <Typography variant='h5' sx={{ color: '#1976d2' }}>Track Your Order</Typography>
                    <Typography variant='body1' sx={{ marginTop: 2 }}>Enter your order ID to track the status of your order.</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        sx={{ marginTop: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={trackOrder}
                        sx={{ marginTop: 2 }}
                    >
                        Track
                    </Button>
                    <Typography variant='body1' sx={{ marginTop: 2 }}>{orderStatus}</Typography>
                </Box>
            </Container>
        </>
    );
};

export default Track;