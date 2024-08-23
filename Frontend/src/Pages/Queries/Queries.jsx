import React, { useState } from 'react';
import { Container, CssBaseline, Typography, Box, Button, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
    display: 'none',
});

const Queries = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        title: '',
        description: '',
        photo: null
    });
    const [error, setError] = useState('');
    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 1024 * 1024) {
            setError('File size should not exceed 1MB');
        } else {
            setError('');
            setFormData({
                ...formData,
                photo: file
            });
            setFileName(file ? file.name : '');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.photo && formData.photo.size > 1024 * 1024) {
            setError('File size should not exceed 1MB');
            return;
        }
        // Handle form submission logic here
        console.log('Form Data:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            category: '',
            title: '',
            description: '',
            photo: null
        });
        setFileName('');
        setError('');
    };

    return (
        <>
            <CssBaseline />
            <Container fixed maxWidth="md">
                <Box sx={{ textAlign: 'center', marginTop: 10 }}>
                    <Typography variant='h3' sx={{ color: '#1976d2', fontWeight: 'bold' }}>Raise a Complaint</Typography>
                </Box>
                <Box sx={{ marginTop: 5, backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            select
                            variant="outlined"
                            label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                            required
                        >
                            <MenuItem value="billing">Billing</MenuItem>
                            <MenuItem value="technical">Technical</MenuItem>
                            <MenuItem value="general">General</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            sx={{ marginTop: 2 }}
                            required
                        />
                        <label htmlFor="upload-photo">
                            <Input
                                id="upload-photo"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                sx={{ marginTop: 2 }}
                            >
                                Upload Photo
                            </Button>
                        </label>
                        {fileName && (
                            <Typography variant='body2' sx={{ marginTop: 2 }}>
                                {fileName}
                            </Typography>
                        )}
                        {error && (
                            <Typography variant='body2' color='error' sx={{ marginTop: 2 }}>
                                {error}
                            </Typography>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>
    );
};

export default Queries;