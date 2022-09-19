// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
    let email = res.body.email;
};

exports.userBoard = (req, res) => {
    res.status(200).send("Mety mory e!!!!!!!!!User Content.");
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};