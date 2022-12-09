import { Query } from './index'
// import chirps from './routes';

const allChirps = async () => Query<string[]>('SELECT * FROM chirps');
const oneChirp = async (chirpid: number) => Query<string[]>('SELECT * FROM chirps WHERE id=?', [chirpid])
const postChirp = async (userid: number, content: string) => Query(`INSERT INTO chirps(userid, content) VALUES('${userid}', '${content}')`)
const deleteChirp = async (chirpid: number) => Query('DELETE FROM chirps WHERE id=?', [chirpid])

export default {
    allChirps,
    oneChirp,
    deleteChirp,
    postChirp
}