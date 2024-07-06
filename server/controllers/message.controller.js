const sendMessages = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal server error!' })
    }
}

module.exports = sendMessages