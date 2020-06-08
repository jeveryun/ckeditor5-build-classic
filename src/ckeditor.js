import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Font from '@ckeditor/ckeditor5-font/src/font';

function SpecialCharactersEmoji (editor) {
	editor.plugins.get('SpecialCharacters').addItems('Emoji', [{
		title: 'smiley face',
		character: '😊'
	},
	{
		title: 'rocket',
		character: '🚀'
	},
	{
		title: 'wind blowing face',
		character: '🌬️'
	},
	{
		title: 'floppy disk',
		character: '💾'
	},
	{
		title: 'heart',
		character: '❤️'
	}
	]);
}

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Font,
	Heading,
	Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table, TableToolbar, TableProperties, TableCellProperties,
	TextTransformation,
	CodeBlock,
	RemoveFormat,
	SpecialCharacters, SpecialCharactersEssentials, SpecialCharactersEmoji
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'removeFormat',
			'heading',
			'|',
			'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript',
			'link',
			'bulletedList',
			'numberedList',
			'|', 'indent', 'outdent',
			'|', 'specialCharacters', 'imageUpload', 'blockQuote', 'codeBlock', 'insertTable', 'mediaEmbed', 'undo', 'redo'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	image: {
		toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn',
	codeBlock: {
		languages: [{
			language: 'plaintext',
			label: 'Plain text'
		}, // The default language.
		{
			language: 'c',
			label: 'C'
		},
		{
			language: 'cs',
			label: 'C#'
		},
		{
			language: 'cpp',
			label: 'C++'
		},
		{
			language: 'css',
			label: 'CSS'
		},
		{
			language: 'diff',
			label: 'Diff'
		},
		{
			language: 'html',
			label: 'HTML'
		},
		{
			language: 'java',
			label: 'Java'
		},
		{
			language: 'javascript',
			label: 'JavaScript'
		},
		{
			language: 'php',
			label: 'PHP'
		},
		{
			language: 'python',
			label: 'Python'
		},
		{
			language: 'ruby',
			label: 'Ruby'
		},
		{
			language: 'typescript',
			label: 'TypeScript'
		},
		{
			language: 'xml',
			label: 'XML'
		}
		]
	}
};
