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

function update(id, data, connection, callback) {
    const {
        duration,
        precision,
        practiseTypeId,
        runupId,
        feeling,
        comments,
    } = data;

    connection.query(
        `UPDATE 
            training_entry
        SET            
            duration = :duration, 
            \`precision\` = :precision, 
            feeling = :feeling, 
            practise_id = 1, 
            practise_type_id = :practiseTypeId, 
            runup_id = :runupId, 
            comments = :comments,
            updated_at = :updatedAt
        WHERE
            id = :id
        `,
        {
            id,
            duration,
            precision,
            practiseTypeId,
            runupId,
            feeling,
            comments,
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        },
        callback
    );
}

export default {
    get,
    save,
    update,
}
