import moment from 'moment';

function get(id, connection, callback) {
    connection.query('SELECT * FROM training_entry WHERE id =:id', { id }, callback);
}

function save(data, connection, callback) {
    const {
        duration,
        precision,
        practiseTypeId,
        runupId,
        feeling,
        comments,
    } = data;

    const now = moment().format('YYYY-MM-DD HH:mm:ss');

    connection.query(
        `INSERT INTO 
            training_entry 
            (
                duration, 
                \`precision\`, 
                feeling, 
                practise_id, 
                practise_type_id, 
                runup_id, 
                comments,
                created_at, 
                updated_at
            ) 
            VALUES 
            (
                :duration, 
                :precision, 
                :feeling,
                1, 
                :practiseTypeId, 
                :runupId, 
                :comments,
                :createdAt, 
                :updatedAt
            )`,
        {
            duration,
            precision,
            practiseTypeId,
            runupId,
            feeling,
            comments,
            createdAt: now,
            updatedAt: now,
        },
        callback
    );
}

export default {
    get,
    save,
}
