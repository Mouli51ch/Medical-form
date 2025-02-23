import express from 'express';
import { createAppointment, getAllAppointments, getAppointmentById, updateAppointment, deleteAppointment } from '../controllers/appointmentController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js'; // Use named import

const router = express.Router();

// Create a new appointment
router.post('/', verifyJWT, createAppointment);

// Get all appointments
router.get('/', verifyJWT, getAllAppointments);

// Get an appointment by ID
router.get('/:id', verifyJWT, getAppointmentById);

// Update an appointment by ID
router.put('/:id', verifyJWT, updateAppointment);

// Delete an appointment by ID
router.delete('/:id', verifyJWT, deleteAppointment);

export default router;