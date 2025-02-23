import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    contact: { type: String, required: true },
    // Add other fields as necessary
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;