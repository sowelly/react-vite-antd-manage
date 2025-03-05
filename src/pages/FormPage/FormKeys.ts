import {Rule} from "antd/lib/form";
import {defaultKeys} from "./index";

type IKeyMap = {
    [key in keyof typeof defaultKeys]: {
        "child": IKeyMap[],
        "type": "text" | "input" | "file" | "radio" | "checkbox",
        "rule": Rule[],
        label: string
    }
}

export const keyMap =
    {
        "picture": {
            "label": '成品图',
            "type": "file",
            "rule": [],
            "child": {}
        },
        "source": {
            "label": '食材清单',
            "type": "list",
            "rule": [],
            "child": {}
        },
        "cookingType": {
            "label": "烹饪方式",
            "type": "radio",
            "rule": [],
            "child": {}
        },
        "processingMethod": {
            "label": "处理方式",
            "type": "text",
            "rule": [],
            "child": {}
        },
        "suitable": {
            "label": "适合人群",
            "type": "multiple",
            "rule": [],
            "child": {}
        },
        "difficulty": {
            "label": "难度指数",
            "type": "rate",
            "rule": [],
            "child": {}
        },
        "recommendation": {
            "label": "推荐指数",
            "type": "rate",
            "rule": [],
            "child": {}
        },
        "isPublic": {
            "label": "是否公开",
            "type": "switch",
            "rule": [],
            "child": {}
        },
        "tips": {
            "label": "注意事项",
            "type": "textarea",
            "rule": [
                {required: true, message: '请输入数字'},
                {type: 'number', message: '必须为数字'},
            ],
            "child": {}
        },

    }


export default keyMap