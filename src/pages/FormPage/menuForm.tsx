import * as React from "react";
import DynamicFormWithValidation from "../../components/DynamicFormWithValidation/index";
import {dynamicFormStore} from '../../stores/dynamicFormStore'
import withFormAuth from "./withFormAuth";


const MenuForm = () => {
    const {form, keys} = dynamicFormStore;


    return <DynamicFormWithValidation keys={keys}
                                      form={form!}
                                      labelCol={{span: 4}}
                                      wrapperCol={{span: 14}}
                                      layout="horizontal"
                                      style={{width: 600}}
                                      initialValues={{"cookingType": '蒸'}}
    />
}

const MenuFormAuth = withFormAuth(MenuForm)
export default MenuFormAuth