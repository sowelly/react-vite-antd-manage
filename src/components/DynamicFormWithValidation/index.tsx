import * as React from "react";
import {Button, Form, Input, InputNumber,  Radio} from "antd";
import {useEffect, useState} from "react";
import {useUpdateEffect} from "ahooks";

const DynamicFormWithValidation = () => {
    const [form] = Form.useForm();
    const ansType = Form.useWatch('ansType', form);
    const quesType = Form.useWatch('quesType', form);

    useEffect(()=>{
        console.log('quesTYPE',quesType)
    },[quesType])

    const [options2, setOptions2] = useState([
        {value: 'a', label: 'a'},
        {value: 'b', label: 'b'},
        {value: 'c', label: 'c'},
    ])
    // 单选框选项
    const options = [
        {value: 'text', label: '文本输入'},
        {value: 'number', label: '数字输入'},
        {value: 'email', label: '邮箱输入'},
    ];
    // 单选框选项
    useUpdateEffect(() => {
        console.log('useUpdateEffect', ansType)
        renderOptions2()
    }, [ansType])


    const renderOptions2 = () => {
        setOptions2([
            {value: 'a', label: 'a'},
            {value: 'b', label: 'b'},
            {value: 'c', label: 'c'},
        ])
    }

    // 根据单选框的值动态设置验证规则
    const getValidationRules = (selectedOption) => {
        switch (selectedOption) {
            case 'text':
                return [
                    {required: true, message: '请输入文本'},
                    {min: 3, message: '文本至少 3 个字符'},
                ];
            case 'number':
                return [
                    {required: true, message: '请输入数字'},
                    {type: 'number', message: '必须为数字'},
                ];
            case 'email':
                return [
                    {required: true, message: '请输入邮箱'},
                    {type: 'email', message: '邮箱格式不正确'},
                ];
            default:
                return [];
        }
    };

    const renderInput = (selectedOption) => {
        switch (selectedOption) {
            case 'text':
                return <Input placeholder="请输入文本"/>;
            case 'number':
                return <InputNumber placeholder="请输入数字" style={{width: '100%'}}/>;
            case 'email':
                return <Input type="email" placeholder="请输入邮箱"/>;
            default:
                return null;
        }
    }

    // 表单提交
    const handleSubmit = (values) => {
        console.log('values', values)
    };


    return <Form form={form} onFinish={handleSubmit}
                 layout="vertical"
                 initialValues={{ansType: 'text', quesType: '', inputValue: ''}}
    >
        <h2>动态表单（Ant Design）</h2>
        <Form.Item name="ansType" label="选择输入类型1">
            <Radio.Group>
                {options.map((option) => (
                    <Radio key={option.value} value={option.value}>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </Form.Item>

        <Form.Item name="quesType" label="选择输入类型2"
                   shouldUpdate={(prevValues, currentValues) => prevValues.ansType !== currentValues.ansType
                   }>
            <Radio.Group>
                {options2.map((option) => (
                    <Radio key={option.value} value={option.value}>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </Form.Item>

        <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
                prevValues.ansType !== currentValues.ansType
            }
        >
            {({getFieldValue}) => {
                const selectedOption = getFieldValue('ansType');
                return (
                    <Form.Item
                        name="inputValue"
                        label="输入框"
                        rules={getValidationRules(selectedOption)}
                    >
                        {renderInput(selectedOption)}
                    </Form.Item>
                );
            }}
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
}
export default DynamicFormWithValidation