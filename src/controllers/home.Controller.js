class homeController {
    index(req, res) {
        res.status(200).json({
            message: 'hello word!'
        })
    }
}

export default new homeController()
