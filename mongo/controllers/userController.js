import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

// get all users
export const getUsers = async (req, res) => {
    try {
        const users =  await User.find();
        res.status(200).json(users);
    }catch (error){
        res.status(500).json({message: "Error fetching users", error: error.message})
    }
}

// update a user
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};
// delete a user

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};
// get a user by id

export const getUserbyId = async (req, res) => {
    const {id} = req.params;

    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
}