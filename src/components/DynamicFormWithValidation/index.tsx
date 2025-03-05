import {Button, Form, FormInstance, Input, InputNumber, Radio, Rate, Select, Space, Switch, Upload} from "antd";
import {FC, ReactElement, useEffect, useState} from "react";
import {useUpdateEffect} from "ahooks";
import {Rule} from "antd/lib/form";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import * as React from "react";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import keyMap from "../../pages/FormPage/FormKeys";
import {useForm} from "antd/es/form/Form";


const {TextArea} = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

interface IDynamicFormProps {
    keys: string[]
    form: FormInstance

    [k: string]: any
}

const DynamicFormWithValidation: FC<IDynamicFormProps> = ({keys, form}) => {
    const renderFormList = (key) => {
        return <Form.List name={key}>
            {(fields, {add, remove}) => (
                <>
                    {fields.map(({key, name, ...restField}) => (
                        <Space key={key} style={{display: 'flex', marginBottom: 8}}
                               align="baseline">
                            <Form.Item
                                {...restField}
                                name={[name, 'type']}
                                rules={[{required: true, message: 'Missing first name'}]}
                            >
                                <Input placeholder="First Name"/>
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'number']}
                                rules={[{required: true, message: 'Missing last name'}]}
                            >
                                <InputNumber/>
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'unit']}
                                rules={[{required: true, message: 'Missing last name'}]}
                            >
                                <Input placeholder="First Name"/>
                            </Form.Item>
                            {
                                fields.length === 1 ? null :
                                    <MinusCircleOutlined onClick={() => remove(name)}/>
                            }
                        </Space>
                    ))}
                    <Form.Item>
                        <Button type="dashed" onClick={() => add()} block
                                icon={<PlusOutlined/>}>
                            Add field
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    }

    const renderFormItem = (key): ReactElement => {
        const {type, label, child} = keyMap[key]
        switch (type) {
            case "file":
                return <Form.Item label={label} valuePropName={'fileList'} getValueFromEvent={normFile}
                                  name={key}>
                    {renderItemDom(type)}
                </Form.Item>
            case 'list':
                return renderFormList(key)
            default:
                return <Form.Item label={label} name={key}>
                    {renderItemDom(type)}
                </Form.Item>

        }
    }

    const renderItemDom = (type): ReactElement => {
        switch (type) {
            case 'file':
                return <Upload action="/upload.do" listType="picture-card">
                    <button
                        style={{color: 'inherit', cursor: 'inherit', border: 0, background: 'none'}}
                        type="button"
                    >
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Upload</div>
                    </button>
                </Upload>
            case 'number':
                return <InputNumber placeholder="请输入数字" style={{width: '100%'}}/>
            case 'radio':
                return <Radio.Group>
                    <Radio value="蒸"> 蒸 </Radio>
                    <Radio value="炒">炒 </Radio>
                    <Radio value="烹"> 烹 </Radio>
                    <Radio value="炸"> 炸 </Radio>
                </Radio.Group>
            case 'rate':
                return <Rate/>
            case 'switch':
                return <Switch/>
            case 'textarea':
                return <TextArea rows={4}/>
            case 'multiple':
                return <Select mode={"multiple"}>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo1">Demo1</Select.Option>
                    <Select.Option value="demo2">Demo2</Select.Option>
                    <Select.Option value="demo3">Demo3</Select.Option>
                </Select>
            case 'select':
                return <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo1">Demo1</Select.Option>
                    <Select.Option value="demo2">Demo2</Select.Option>
                    <Select.Option value="demo3">Demo3</Select.Option>
                </Select>
            default:
                return <Input placeholder="请输入文本"/>;
        }
    }

    // 表单提交
    const handleSubmit = (values) => {
        console.log('values', values)
    }


    return <Form form={form} onFinish={handleSubmit}
    >

        {keys.map((keyItem) => {
            return <div key={keyItem}>
                {renderFormItem(keyItem)}
            </div>
        })}


        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
}
export default DynamicFormWithValidation