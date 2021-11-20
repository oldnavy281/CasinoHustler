exports.index = (req, res) => {
    res.render('index', {
        title: 'This is the backend. How did you get here?',
        config
    });
};