import express from 'express';

// Import route files
import authRoutes from './auth.routes.js';
import patientRoutes from './patient.routes.js';
import doctorRoutes from './doctor.routes.js';
import appointmentRoutes from './appointment.routes.js';
import adminRoutes from './admin.routes.js';

const router = express.Router();

// Use routes
router.use('/auth', authRoutes); // Authentication routes
router.use('/patients', patientRoutes); // Patient routes
router.use('/doctors', doctorRoutes); // Doctor routes
router.use('/appointments', appointmentRoutes); // Appointment routes
router.use('/admin', adminRoutes); // Admin routes

export default router;