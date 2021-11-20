exports.index = (req, res) => {
    res.render('index', {
        title: 'This is the backend. How tf did you get here?',
        config
    });
};