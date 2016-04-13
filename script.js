(function() {
    var configuration = {};
/*
    var hash = window.location.hash;
    hash = hash.substr(1, hash.length);

    if (hash.length > 0) {
        try {
            configuration = JSON.parse(decodeURIComponent(hash));
        } catch (err){
            console.error('Failed to load configuration', err);
        }
    }
*/
    var fields = document.getElementsByTagName('input');
    var length = fields.length;
    while (length--) {
        var field = fields[length];
        setValue.call(field);
        field.addEventListener('change', setValue, false);
    }
    function setValue() {
        configuration[this.getAttribute('data-target')] = this.value;
    }

    document.getElementById('save').onclick = function() {
        console.log(JSON.stringify(configuration));
        window.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(configuration));
    };

})(this);
