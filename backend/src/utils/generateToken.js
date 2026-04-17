// import jwt from "jsonwebtoken";

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// export default generateToken;

// src/utils/generateToken.js (অথবা আপনার ফোল্ডার অনুযায়ী)
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// এই লাইনটি ঠিকমতো আছে কি না নিশ্চিত করুন
export default generateToken;
