'use strict';


module.exports = UEditorNode;


function UEditorNode(options, ctx) {
	if (!(this instanceof UEditorNode)) {
		return new UEditorNode(options, ctx);
	}

	if (options && options.inited) {
		this.options = options
	} else {
		// this.options = UEditorNode
	}
}