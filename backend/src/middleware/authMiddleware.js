// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//     let token;
//     if (req.headers.authorization?.startsWith("Bearer")) {
//         try {
//             token = req.headers.authorization.split(" ")[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select("-password");
//             next();
//         } catch {
//             res.status(401).json({ message: "Token সঠিক নয়" });
//         }
//     }
//     if (!token) res.status(401).json({ message: "Token নেই" });
// };
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");

            // টোকেন ভ্যালিড হলে এখানে next() কল হবে এবং ফাংশন শেষ হবে
            return next();
        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: "Token সঠিক নয়" });
        }
    }

    // যদি টোকেন না থাকে তবেই এই অংশটি কাজ করবে
    if (!token) {
        return res.status(401).json({ message: "Token নেই, প্রবেশ নিষেধ" });
    }
};
