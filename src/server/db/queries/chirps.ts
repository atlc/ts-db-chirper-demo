import { Chirps, Users } from '../../../utilities/types';
import { Query } from '../index';

const get_all = () => Query<Chirps[]>('SELECT * FROM Chirps');
const get_by_id = (id: Chirps['id']) => Query<Chirps[]>('SELECT * FROM Chirps WHERE id=?', [id]);
const get_with_authors = () => Query<(Chirps & Users)[]>('SELECT c.*, u.username FROM Chirps c JOIN Users u ON user_id=u.id');
const get_by_id_with_author = (id: Chirps['id']) => Query<(Chirps & Users)[]>('SELECT c.*, u.username FROM Chirps c JOIN Users u ON user_id=u.id WHERE u.id=?', [id]);

const create = ({ ...chirp }: Chirps) => Query('INSERT INTO Chirps SET ?', [chirp]);
const update = ({ id, ...chirp }: Chirps) => Query('UPDATE Chirps SET ? WHERE id=?', [chirp, id]);
const destroy = (id: Chirps['id']) => Query('DELETE FROM Chirps WHERE id=?', [id]);

export default {
    get_all,
    get_by_id,
    get_with_authors,
    get_by_id_with_author,
    create,
    update,
    destroy
}