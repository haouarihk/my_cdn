function getParams() {
    let urlparams = location.search.split("?")[1] || "";
    let urlParams = urlparams.split`&`
    let params = {}
    urlParams.forEach(p => {
        let lame = p.split`=`

        let one = lame[0]
        let lame2 = ''
        if (lame.length === 1) {
            lame2 = true
        } else {
            lame2 = lame.splice(1, lame.length - 1).join`=`
            lame2 = lame2 == "true" ? true : decodeURI(lame2)
            lame2 = lame2 == "false" ? false : decodeURI(lame2)
        }

        params[one] = lame2
    })

    return params
}