(function() {
    var configuration = {};

    var hash = window.location.hash;
    hash = hash.substr(1, hash.length);

    if (hash.length > 0) {
        try {
            configuration = JSON.parse(decodeURIComponent(hash));
        } catch (err){
            console.error('Failed to load configuration', err);
        }
    }
    var nfo = document.getElementById('nfo');
    nfo.innerHTML = JSON.stringify(configuration);
    var stopsElem = document.getElementById('stops');
    var def_input = stopsElem.getElementsByTagName('input')[0];
    
    var i, l = configuration.stops.length;
    for (i = 0; i < l; ++i) {
        var inp = def_input.cloneNode();
        inp.ind = i;
        inp.value = configuration.stops[i];
        stopsElem.insertBefore(inp, stopsElem.firstChild);
        inp.addEventListener('change', setValue, false);
    }
    def_input.ind = l;
    def_input.addEventListener('change', setValue, false);
    
    function setValue() {
        configuration.stops[this.getAttribute('ind')] = this.value;// == '' ? null : this.value;
    }

    document.getElementById('save').onclick = function() {
        console.log(JSON.stringify(configuration));
        window.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(configuration));
    };

})(this);
