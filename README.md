nmmabortandsave Plugin for CKEditor 4
=====================================

Created by ALL-INKL.COM - Neue Medien Münnich - 16 Dec 2015

This Plugin integrate custom save/abort functions to CKEditor.

## Installation

 1. Download the plugin from http://github.com/nmmf/nmmabortandsave
 
 2. Extract (decompress) the downloaded file into the plugins folder of your
	CKEditor installation.
	Example: http://example.com/ckeditor/plugins/nmmabortandsave
	
 3. Enable the plugin by using the extraPlugins configuration setting.
	Example: CKEDITOR.config.extraPlugins = "nmmabortandsave";
	
 4. Config:
	CKEDITOR.config.nmmabortandsave = {
		onSave	:	function(editor){},
		onAbort :	function(editor){}
	};
