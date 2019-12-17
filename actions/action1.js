function main(params) {
    return {
        action1_output: isEmpty(params)
    };
}

function isEmpty(obj) {
    for (x in obj) {
        return obj;
    }
    return "action1 output edited";
}
