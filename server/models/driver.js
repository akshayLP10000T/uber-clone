import mongoose from 'mongoose';

const driverModel = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "Length should be atleast 3 characters long"],
        },
        lastName: {
            type: String,
            minlength: [3, "Length should be atleast 3 characters long"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
        unique: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plate: {
            type: String,
            minlength: [3, "Invalid Number Plate"],
            required: true,
        },
        capacity: {
            type: Number,
            min: [1, "Invalid capacity"],
            max: [10, "Capacity cannot be more than 10"],
            required: true,
        },
        vehicleType: {
            type: String,
            enum: ["car", "motorcycle", "auto"],
            required: true,
        },
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },

});

export const Driver = mongoose.model("Driver", driverModel);