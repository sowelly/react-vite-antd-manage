import * as React from "react";
import MenuFormAuth from "./menuForm";
import {Card, Form, Splitter, Tabs, TabsProps} from "antd";
import {observer} from 'mobx-react-lite';
import {useEffect, useState} from "react";
import {dynamicFormStore} from '../../stores/dynamicFormStore'
import MenuPreviewAuth from "./menuPreview";
import styles from './index.module.less'

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

export const defaultKeys = ["source", "cookingType", "processingMethod", "suitable", "difficulty", "recommendation", "isPublic", "tips", "picture"]


const FormDisabledDemo: React.FC = () => {
    const [form] = Form.useForm<FormValues>();
    const [tabKey, setTabKey] = useState("1")

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
        if (key === '1') {
            console.log('onChange1', key);
            dynamicFormStore.setKeys([...defaultKeys])
        } else {
            console.log('onChange2', key);
            dynamicFormStore.setKeys(["picture", "source", "cookingType"])
        }
        setTabKey(key)
    };

    return (
        form ? <div className={styles.formWrap}>
            <Card>
                <Splitter>
                    <Splitter.Panel defaultSize="40%" min="30%" max="50%">
                        <Tabs defaultActiveKey={tabKey} items={TabItems} onChange={onChange}/>
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <MenuPreviewAuth key={tabKey}/>
                    </Splitter.Panel>
                </Splitter>
            </Card>
        </div> : null
    );
};

export default observer(FormDisabledDemo)