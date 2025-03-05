// formStore.ts
import { makeAutoObservable } from "mobx";
import { FormInstance } from "antd/es/form";

class FormStore {
    form: FormInstance | null = null; // 初始时为空
    keys: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setForm(form: FormInstance) {
        this.form = form;
    }

    setKeys(newKeys: string[]) {
        this.keys = newKeys;
    }
}

export const dynamicFormStore = new FormStore();
