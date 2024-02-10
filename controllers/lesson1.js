const helloRoute = (req, res) => {
    res.send('Hello!')
}

const austinRoute = (req, res) => {
    res.send('Austin Ma')
}

module.exports = {
    helloRoute,
    austinRoute,
};
