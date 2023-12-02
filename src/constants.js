import axios from "axios"

// export const apiUrl = 'http://localhost:8000'
export const apiUrl = 'https://congapi.178765.xyz'

export const reCaptchaKey = '6Ldr4ucoAAAAAKwW2FX-bCJIo6YHztxzf97Y_Tl8'

export const constConfig =
{
    zIndex: 0,
    readonly: false,
    processPasteFromWord: true,
    activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
    toolbarButtonSize: 'middle',
    theme: 'default',
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    width: 'auto',
    height: 'auto',
    minHeight: 300,
    toolbarInline: true,
    toolbarInlineForSelection: true,
    toolbarInlineDisableFor: [],
    toolbarInlineDisabledButtons: ['source'],
    direction: '',
    language: 'auto',
    debugLanguage: false,
    i18n: 'en',
    tabIndex: -1,
    toolbar: false,
    inlinePopup: true,
    enter: "P",
    useSplitMode: false,
    colors: {
        greyscale: ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
        palette: ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
        full: [
            '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
            '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
            '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
            '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
            '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
            '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
        ]
    },
    colorPickerDefaultTab: 'background',
    // imageDefaultWidth: 300,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    sizeSM: 400,
    buttons: [
        'source', '|',
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'video',
        'table',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat', '|',
        'symbol',
        'fullsize',
        'print',
        'about'
    ],
    buttonsXS: [
        'bold',
        'image', '|',
        'brush',
        'paragraph', '|',
        'align', '|',
        'undo', 'redo', '|',
        'eraser',
        'dots'
    ],
    events: {},
    textIcons: false,
    // uploader: { 'insertImageAsBase64URI': true },
    askBeforePasteFromWord: false,
    hotkeys: {
        redo: 'ctrl+z',
        undo: 'ctrl+y,ctrl+shift+z',
        indent: 'ctrl+]',
        outdent: 'ctrl+[',
        bold: 'ctrl+b',
        italic: 'ctrl+i',
        removeFormat: 'ctrl+shift+m',
        insertOrderedList: 'ctrl+shift+7',
        insertUnorderedList: 'ctrl+shift+8',
        openSearchDialog: 'ctrl+f',
        openReplaceDialog: 'ctrl+r'
    }
}


export const getCategories = async () => {
    if (localStorage.getItem('category_list')) {
        return JSON.parse(localStorage.getItem('category_list'));
    } else {
        return await axios.get(`${apiUrl}/category/`).then(res => {
            localStorage.setItem('category_list', JSON.stringify(res.data.data))
            return res.data.data
        })
    }
}

export const toCapitalCase = (val) => {
    return val.split('-').map(res => res[0]?.toUpperCase() + res.slice(1)).join(' ')
}