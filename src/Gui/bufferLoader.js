function BufferLoader(context, urlList, root, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = [];
    this.loadCount = 0;
    // shadow DOM of the component
    this.root = root;
}

BufferLoader.prototype.loadBuffer = function(url, index, isPad) {
    // Load buffer asynchronously
    // console.log('file : ' + url + "loading and decoding");

    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.responseType = "arraybuffer";

    var loader = this;

    request.onload = () => {

        // Asynchronously decode the audio file data in request.response
        loader.context.decodeAudioData(
                request.response,
                (buffer) => {
                        // console.log("Loaded and decoded track " + (loader.loadCount+1) + 
                        // "/" +  loader.urlList.length + "...");

                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;

                    //console.log("In bufferLoader.onload bufferList size is " + loader.bufferList.length + " index =" + index);
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                },
                (error) => {
                    console.error('decodeAudioData error', error);
                }
        );
    }

    request.onprogress = (e) => {

        // Si l'on charge les pads :
        if(isPad == true) {
            // e.total - 100%
            // e.value - ?
            if(e.total !== 0) {
                //var percent = (e.loaded * 100) / e.total;

                //console.log("loaded " + percent  + "of song " + index);
                var progress = this.root.querySelector("#progress" + index);
                progress.value = e.loaded;
                progress.max = e.total;
            }
        }

        // Si l'on charge les sons dans l'explorer :
        else {
            // e.total - 100%
            // e.value - ?
            if(e.total !== 0) {
                //var percent = (e.loaded * 100) / e.total;

                //console.log("loaded " + percent  + "of song " + index);
                var progress = this.root.querySelector("#progressExplorer" + index);
                progress.value = e.loaded;
                progress.max = e.total;
            }
        }
    }
    
    request.onerror = function() {
        alert('BufferLoader: XHR error');
    }

    request.send();
}

BufferLoader.prototype.load = function() {
    // M.BUFFA added these two lines.
    this.bufferList = [];
    this.loadCount = 0;
    //clearLog();
    // console.log("Loading tracks... please wait...");
    // console.log("BufferLoader.prototype.load urlList size = " + this.urlList.length);
    for (var i = 0; i < this.urlList.length; ++i){
        if(this.urlList[i] === "" || this.urlList[i] === null || this.urlList[i] === undefined) {
            this.bufferList[i] = null;
            this.loadCount++;
        }
        else{
            this.loadBuffer(this.urlList[i], i, true);
        }
    }
}

BufferLoader.prototype.loadExplorer = function() {
    // M.BUFFA added these two lines.
    this.bufferList = [];
    this.loadCount = 0;
    //clearLog();
    // console.log("Loading tracks... please wait...");
    // console.log("BufferLoader.prototype.load urlList size = " + this.urlList.length);
    for (var i = 0; i < this.urlList.length; ++i){
        if(this.urlList[i] === "" || this.urlList[i] === null || this.urlList[i] === undefined) {
            this.bufferList[i] = null;
            this.loadCount++;
        }
        else{
            this.loadBuffer(this.urlList[i], i, false);
        }
    }
}

export default BufferLoader;