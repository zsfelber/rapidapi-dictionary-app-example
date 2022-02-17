

exports.respond = async function(guts, context) {
    try {
        console.time("Response sent.");

        const data = await guts();

        if (context.electron) {
            return data;
        } else {
            let json = JSON.stringify(data);

            if (!json) {
                json = "{}";
            }

            return {
                statusCode: 200,
                body: json,
                headers: {
                'Access-Control-Allow-Origin': '*'
                }
            }
        }
    } catch (err) {
        console.log(err)
        if (context.electron) {
            throw err;
        } else {
            return { statusCode: 500, body: err.toString() };
        }
    } finally {
        console.timeEnd("Response sent.");
    }
}

