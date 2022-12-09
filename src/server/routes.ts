import * as express from 'express'
import db from "./db";

let router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


router.get("/db/chirps", async (req, res) => {
  
  try {
    res.json(await db.chirps.allChirps());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/db/chirps/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json((await db.chirps.oneChirp(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/db/chirps/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json((await db.chirps.deleteChirp(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  let userid = req.body.user
  let content = req.body.user
  
  // const { content } = req.body;
  // const newChirp = {userid: 1, content}
  // const DBResponse = await db.chirps.postChirp(newChirp.userid, newChirp.content )
  // const newChirpId = DBResponse.insertId;
  // const newUser = await db.users.newUser(content);
  // console.log(newUser);
  try {
    res.json(await db.chirps.postChirp( userid , content));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
// const newChirp = ( userid: 1, content: string );