const {connectToDatabase} = require('../../lib/mongodb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getUsers(req, res);
        }
    }
}

async function getUsers(req, res) {
    try {
        let {db} = await connectToDatabase();

        let users = await db
            .collection('users').find({})
            .toArray();

        return res.json({
            message: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
