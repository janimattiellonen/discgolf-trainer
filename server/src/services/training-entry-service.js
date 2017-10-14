import moment from 'moment';

function save(data, connection, callback) {
    const {
        duration,
        precision
    } = data;

    const now = moment().format('YYYY-MM-DD HH:mm:ss');

    connection.query(
        'INSERT INTO training_entry (`duration`, `precision`, `practise_id`, `practise_type_id`, `runup_id`, `created_at`, `updated_at`) VALUES(:duration, :precision, 1, 1, 1, :createdAt, :updatedAt)',
        {
            duration,
            precision,
            createdAt: now,
            updatedAt: now,
        },
        callback
    );
}

export default {
    save,
}