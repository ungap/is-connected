/*! (c) Andrea Giammarchi - ISC */
"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}});