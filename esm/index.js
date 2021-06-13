/*! (c) Andrea Giammarchi - ISC */
if (!('isConnected' in Element.prototype))
  Object.defineProperty(Element.prototype, 'isConnected', {
    configurable: true,
    get: function () {
      return !(
        this.ownerDocument.compareDocumentPosition(this) &
        this.DOCUMENT_POSITION_DISCONNECTED
      );
    }
  });
