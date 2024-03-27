import mongoose from "mongoose";

const calculationsSchema = new mongoose.Schema(
    {
        calculation: {
            type: String,
            required: true,
        },

        result: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const Calculations = mongoose.model("calculations", calculationsSchema);

export default Calculations;
