var tinyinit = {
  selector: '#editor',
  language: 'es',
  height: 400,
  menu: {
		//file: {title: 'File', items: 'newdocument'},
		edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
		insert: {title: 'Insert', items: '|'},
		view: {title: 'View', items: 'visualaid |'},
		format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
		table: {title: 'Table'},
		tools: {title: 'Tools'}
	},
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code',
  plugins: 'link image media code',
  content_css: 'css/styles.css?' + new Date().getTime(),
  style_formats_merge: true,
  style_formats: [{
    title: 'Change circle for greek symbols', selector: 'ul', classes:'greek-symbols',
    },
  ],
};

tinymce.init(tinyinit);
