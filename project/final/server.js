const express = require("express");
const app = express();
const Joi = require("joi");
const cors = require("cors");
const multer = require("multer");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "public/images/" });

mongoose
  .connect(
    "mongodb+srv://joshCook:d85E3y01kxAggwI2@assignment17.yyxfcpj.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

const storySchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  source: String,
});

const Story = mongoose.model("Story", storySchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/planes", (req, res) => {
  res.sendFile(__dirname + "/planes.html");
});

app.get("/helicopters", (req, res) => {
  res.sendFile(__dirname + "/helicopters.html");
});

app.get("/replicas", (req, res) => {
  res.sendFile(__dirname + "/replicas.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/stories", (req, res) => {
  res.sendFile(__dirname + "/stories.html");
});

app.get("/api/stories", async (req, res) => {
  getStories(res);
});

const getStories = async (res) => {
  const stories = await Story.find();
  res.send(stories);
};

app.post("/api/stories", upload.single("img"), (req, res) => {
  const validate = validateStory(req.body);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const story = new Story({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
    source: req.body.source,
  });

  if (req.file) {
    story.image = req.file.filename;
  }

  createStory(res, story);
});

const createStory = async (res, story) => {
  const result = await story.save();
  res.send(result);
};

app.put("/api/stories/:id", upload.single("image"), async (req, res) => {
  const validate = validateStory(req.body);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }
  updateStory(req, res);
});

const updateStory = async (req, res) => {
  let fields = {
    title: req.body.title,
    description: req.body.description,
    source: req.body.source,
  };

  if (req.file) {
    fields.image = req.file.filename;
  }

  const story = await Story.updateOne({ _id: req.params.id }, fields);
  res.send(story);
};

app.delete("/api/stories/:id", async (req, res) => {
  removeStory(req, res.params.id);
});

const removeStory = async (req, id) => {
  const story = await Story.findByIdAndDelete(id);
  res.send(story);
};

const validateStory = (story) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    source: Joi.string().min(3).required(),
  });

  return schema.validate(story);
};

app.listen(3000, () => console.log("Listening on port 3000..."));
