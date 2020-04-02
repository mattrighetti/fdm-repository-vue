const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const knex = require("knex");
const process = require("process");
const _ = require("lodash");
const fileupload = require('express-fileupload')
const compression = require('compression')
const morgan = require('morgan');
const cors = require('cors');

var path = require("path");
let db;
let serverPort = process.env.PORT || 5000;

/**
 * Method that instantiates/connects to the database
 */
function initKnex() {
    if (process.env.TEST) {
        db = knex({
            client: "sqlite3",
            debug: false,
            connection: {
                filename: "./other/db/postRepositoryDatabase.db"
            },
            useNullAsDefault: true
        });
    } else {
        db = knex({
            client: "mysql",
            debug: true,
            connection: {
                "host" : process.env.DATABASE_HOST || "127.0.0.1",
                "port" :"3306",
                "user" : "root",
                "password" : "password",
                "database" : "fdm-repository-db"
            },
            useNullAsDefault: true
        });
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(compression())
app.use(fileupload())
app.use(morgan('combined'));
app.use(cors());

app.get("/all", function (req, res) {
    db("models").select().then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models", function (req, res) {
    db("models")
    .select('id', 'name', 'acronym', 'version', 'cod', 'soa', 'floodtypei', 'floodtypeii', 'modeltypei', 'modeltypeii', 'modeltypeiii', 'eis')
    .orderBy('name', 'asc')
    .orderBy('acronym', 'asc')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/filters/eis", function (req, res) {
    db("models")
    .distinct('eis')
    .then(result => {
        // Unwrap object
        result = result.map((obj) => obj.eis)
        // Remove every filter with "/"
        result = result.filter(obj => { return !obj.includes("/") })
        console.log(result)
        res.send(JSON.stringify(result));
    });
});

app.get("/filters/country", function (req, res) {
    db("models")
    .distinct('cod')
    .then(result => {
        result = result.map((obj) => obj.cod)
        res.send(JSON.stringify(result));
    });
});

app.get("/data_chart", function (req, res) {
    db("models")
    .select('cod', 'name')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select()
    .then(result => {
        res.send(result);
    });
});

app.get("/models/:modelId/header", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('name', 'acronym', 'version', 'cod', 'soa', 'floodtypei', 'floodtypeii', 'modeltypei', 'modeltypeii', 'modeltypeiii', 'eis')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/expression", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('expression')
    .then(result => {
        res.send(JSON.parse(result[0].expression));
    });
});

app.get("/models/:modelId/id", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('name', 'acronym', 'version', 'yearoflastupdate', 'authors', 'linkedmodels', 'expression')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/modelinputs", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('modelinputs')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/modeloutputs", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('modeloutputs')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/infooncalibration", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('infooncalibration')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/infoonvalidation", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('infoonvalidation')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/transferability", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('transferability')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/bibliography", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('bibliography')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/:modelId/comparison", function (req, res) {
    let idm = parseInt(req.params.modelId);
    db("models")
    .where('id', idm)
    .select('Comparison')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/missing_models", function (req, res) {
    db("missing_models")
    .select('id', 'name', 'biblio')
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/missing_models/count", function (req, res) {
    db("missing_models")
    .count()
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.get("/models/count", function (req, res) {
    db("models")
    .count()
    .then(result => {
        res.send(JSON.stringify(result));
    });
});

app.post("/save_user_data", function (req, res) {
    var date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let newUser = {
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.email,
        affiliation: req.body.affiliation,
        comment: req.body.comment,
        month: month,
        year: year
    };

    db('user').insert(newUser).then(function () {
        res.json({
            success: true,
            message: 'ok'
        });
    });
});

app.post("/saveFile", async function (req, res) {

    console.log("Endpoint fileupload contacted.")

    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let file = req.files.file;
            const path = __dirname + '/other/uploaded_files/' + file.name;

            file.mv(path, (error) => {
                if (error) {

                    console.error(error);

                    res.writeHead(500, {
                        'Content-Type': 'application/json'
                    });

                    res.end(JSON.stringify({
                        status: 'error',
                        message: error
                    }));
                    return;
                }

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    status: 'success',
                    path: '/uploaded_files/' + file.name
                }));
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.set("port", serverPort);
initKnex();

/* Start the server on port 5000 */
app.listen(serverPort, function () {
    console.log(`Your app is ready at port ${serverPort}`);
});