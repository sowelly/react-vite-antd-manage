// withFormAuth.tsx
import React from "react";
import { dynamicFormStore } from "../../stores/dynamicFormStore";
import { observer } from "mobx-react-lite";

const withFormAuth = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
    const WithFormAuth: React.FC<P> = (props) => {
        // 直接从 MobX store 中获取 form
        const { form } = dynamicFormStore;

        if (!form) {
            return <div>加载表单中...</div>;
        }
        return <WrappedComponent {...props} />;
    };

    return observer(WithFormAuth);
};

export default withFormAuth;
