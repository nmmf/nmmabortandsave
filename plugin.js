/*
 * nmmabortandsave Plugin for CKEditor (http://github.com/nmmf/nmmabortandsave)
 * Created by ALL-INKL.COM - Neue Medien Münnich - 16 Dec 2015
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */
CKEDITOR.plugins.add(
	'nmmabortandsave',
	{
		init	:	function(editor)
					{
						editor.addCommand(
							'nmmsave', 
							{
								modes	:	{
												wysiwyg	:	1,
												source	:	1
											},
								exec	:	function(editor)
											{
												if(		CKEDITOR.config.nmmabortandsave
												   &&	CKEDITOR.config.nmmabortandsave.onSave
												){
													CKEDITOR.config.nmmabortandsave.onSave(editor);
												}
											}
							}
						);
						editor.ui.addButton('NMMSave', {label : 'Speichern', command : 'nmmsave'});
						
						editor.addCommand(
							'nmmabort', 
							{
								modes	:	{
												wysiwyg	:	1,
												source	:	1
											},
								exec	:	function(editor)
											{
												if(		CKEDITOR.config.nmmabortandsave
												   &&	CKEDITOR.config.nmmabortandsave.onAbort
												){
													CKEDITOR.config.nmmabortandsave.onAbort(editor);
												}
											}
							}
						);
						editor.ui.addButton('NMMAbort', {label : 'Abbrechen', command : 'nmmabort'});
					}
	}
);
