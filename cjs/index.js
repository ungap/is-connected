/*! (c) Andrea Giammarchi - ISC */
if (!('isConnected' in Node.prototype))
  Object.defineProperty(Node.prototype, 'isConnected', {
    configurable: true,
    get: function () {
      return !(
        this.ownerDocument.compareDocumentPosition(this) &
        this.DOCUMENT_POSITION_DISCONNECTED
      );
    }
  });
