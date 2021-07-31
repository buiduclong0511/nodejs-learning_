const Audio = require("../models/Audio");

class NewsController {

    // [GET] /:slug
	index(req, res, next) {
        const slug = req.params.slug;
        Audio.findOne({ _id: slug}, function (err, audio) {
            if (!err) {
                res.json(audio);
            } else {
                res.status(400).json({
                    message: "Not found"
                });
            }
        });
	}

    // [POST] /uploadFile

    store(req, res, next) {
        const files = req.files
        console.log(files, req.body);
        if (!files) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return;
        }
        const name = req.body.name;
        const description = req.body.description;
        const fileUrl = 'http://localhost:3000/audios/' + files.audioFile[0].filename;
        const thumbUrl = 'http://localhost:3000/images/' + files.thumb[0].filename;
        const author = {
            name: "buiduclong"
        };
        const audio = new Audio({
            name,
            description,
            fileUrl,
            thumbUrl,
            author
        });
        audio.save((err, audio) => {
            if (err) {
                return next(err);
            }
            res.json(audio);
        });
    }
}

module.exports = new NewsController;