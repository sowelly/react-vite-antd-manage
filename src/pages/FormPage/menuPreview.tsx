import {Card, Divider, Form, Splitter} from "antd";
import * as React from "react";
import {FC, useContext, useEffect} from "react";
import {defaultKeys} from "./index";
import keyMap from "./FormKeys";
import {dynamicFormStore} from '../../stores/dynamicFormStore'
import withFormAuth from "./withFormAuth";


const MenuPreview: FC = () => {
    const {form, keys} = dynamicFormStore;

    const defaultKeysAll = Form.useWatch<{ [key: string]: any; }>([], form!);

    useEffect(() => {
        console.log('defaultKeys', defaultKeysAll)
    }, [defaultKeysAll])

    useEffect(() => {
        console.log('keys', keys)
    }, [keys])


    const arrayRender = (array) => {
        if (!array || !Array.isArray(array)) return <div>null</div>;

        let res = ``

        function judgeArr(arrObj) {
            if (Array.isArray(arrObj)) {
                for (const item of array) {
                    judgeArr(item)
                }
            } else {
                if (!arrObj) return
                if (arrObj && typeof arrObj === "object") {
                    for (let k in arrObj) {
                        res += arrObj[k] + " "
                    }
                    res += "<br/>"; // 每个对象换行
                } else {
                    res += arrObj + " "; // 处理基本类型
                }
            }
        }

        judgeArr(array)
        return res
    }

    const valueFormatter = (val) => {
        const typeVal = typeof val
        switch (typeVal) {
            case "boolean":
                return val ? "是" : "否"
            case "object":
                const html = arrayRender(val)
                return <div dangerouslySetInnerHTML={{__html: html}}></div>
            default:
                return val
        }

    }
    return <div>
        {
            keys.map((key, index) => {
                return <Card title={keyMap[key].label} key={index} variant="borderless">
                    <div>{valueFormatter(defaultKeysAll?.[key])}</div>
                    {index === keys.length - 1 ? <Divider style={{borderColor: '#7cb305'}} dashed>
                    </Divider> : null}
                </Card>
            })
        }
    </div>
}
const MenuPreviewAuth = withFormAuth(MenuPreview)
export default MenuPreviewAuth