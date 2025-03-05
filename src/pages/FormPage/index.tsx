import * as React from "react";
import MenuFormAuth from "./menuForm";
import {Form, Splitter, Tabs, TabsProps} from "antd";
import './index.less'
import {observer} from 'mobx-react-lite';
import {useEffect} from "react";
import {dynamicFormStore} from '../../stores/dynamicFormStore'
import MenuPreviewAuth from "./menuPreview";

export interface FormValues {
    picture: string
    source: string
    cookingType: string
    processingMethod: string
    suitable: string
    difficulty: string
    recommendation: string
    isPublic: string
    tips: string
}

export const defaultKeys = ["picture", "source", "cookingType", "processingMethod", "suitable", "difficulty", "recommendation", "isPublic", "tips"]


const FormDisabledDemo: React.FC = () => {
    const [form] = Form.useForm<FormValues>();

    // 设置表单实例到 MobX store（只执行一次）
    useEffect(() => {
        if (!dynamicFormStore.form) {
            dynamicFormStore.setForm(form);
            dynamicFormStore.setKeys([...defaultKeys])
        }
    }, [form]);


    const TabItems: TabsProps['items'] = [
        {
            key: '1',
            label: '动态表单1',
            children: <MenuFormAuth/>
        },
        {
            key: '2',
            label: '动态表单2',
            children: <MenuFormAuth/>
        }
    ];

    const onChange = (key: string) => {
        console.log(key);
        key === '1' ? dynamicFormStore.setKeys([...defaultKeys]) : dynamicFormStore.setKeys(["picture", "source", "cookingType"])
    };

    return (
        form ? <div className={'formWrap'}>
            <Splitter>
                <Splitter.Panel defaultSize="40%" min="30%" max="50%">
                    <Tabs defaultActiveKey="1" items={TabItems} onChange={onChange}/>;
                </Splitter.Panel>
                <Splitter.Panel>
                    <MenuPreviewAuth/>
                </Splitter.Panel>
            </Splitter>
        </div> : null
    );
};

export default observer(FormDisabledDemo)