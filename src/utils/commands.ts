import {ChainablePromiseArray, ChainablePromiseElement, ElementArray} from 'webdriverio'
import report from '@wdio/allure-reporter'

export const setText = async (element:ChainablePromiseElement<WebdriverIO.Element>, text:string) => {
    await element.setValue(text);
    report.addStep(`Value entered: ${text}`);
    
}

export const selectDropDown = async(elements:ChainablePromiseArray<ElementArray>, value: string) => {
    for (let i = 0 ; i < await(elements).length; i++) {
        const elementValue = await elements[i].getAttribute('value');
        if(elementValue === value) {
            await elements[i].click();
            report.addStep(`Dropdown value selected: ${value}`);
            break;
        }
    }
}

export const addLog = (log:string) => {
    report.addStep(`Step: ${log}`);
}


