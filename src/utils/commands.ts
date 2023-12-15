import report from '@wdio/allure-reporter'
import { $, $$ } from '@wdio/globals'

export const setText = async (element: string, text: string) => {
    await $(element).setValue(text);
    await report.addStep(`Value entered: ${text}`);
}

export const selectDropDown = async (dropdown: string, elements: string, value: string) => {
    await $(dropdown).waitForDisplayed({ timeout: 7000, timeoutMsg: "DropDown is missing" })
    await $(dropdown).click()
    await browser.waitUntil(async () => (await $$(elements)).length > 0,
        {
            timeout: 5000,
            timeoutMsg: "No dropdown elemets found"
        },
    )
    const list = await $$(elements)
    for (let index = 0; index < list.length; index++) {
        const element = (await list[index].getAttribute('value')).trim()
        if (element === value) {
            await list[index].click()
            await report.addStep(`Dropdown value selected: ${value}`);
            break
        }
    }
}

export const addLog = (log: string) => {
    report.addStep(`Step: ${log}`);
}


